'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import Link from 'next/link'
import { Plus, Edit, Trash2, Loader2, Plane } from 'lucide-react'
import { TravelProgram } from '@/data/programsData'
import toast from 'react-hot-toast'

function ProgramsList() {
  const queryClient = useQueryClient()
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') === 'hajj' ? 'hajj' : 'umrah'

  const { data: programs, isLoading, error } = useQuery<TravelProgram[]>({
    queryKey: ['programs'],
    queryFn: () => api.getPrograms(),
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.deleteProgram(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['programs'] })
      toast.success('تم حذف البرنامج بنجاح!')
    },
    onError: () => {
      toast.error('حدث خطأ أثناء الحذف.')
    }
  })

  const handleDelete = (id: string) => {
    toast((t) => (
      <div className="flex flex-col gap-4">
        <span className="font-bold text-gray-900 text-right">هل أنت متأكد من حذف هذا البرنامج؟ لا يمكن التراجع.</span>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => {
              toast.dismiss(t.id)
              deleteMutation.mutate(id)
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700"
          >
            نعم، احذف
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300"
          >
            إلغاء
          </button>
        </div>
      </div>
    ), { duration: 4000, position: 'top-center' })
  }

  const filteredPrograms = programs?.filter((p) => p.type === activeTab) || []
  
  // Group programs by categoryLabel
  const groupedPrograms = filteredPrograms.reduce((acc, program) => {
    const category = program.categoryLabel || 'غير مصنف'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(program)
    return acc
  }, {} as Record<string, TravelProgram[]>)

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {activeTab === 'umrah' ? 'إدارة برامج العمرة' : 'إدارة برامج الحج'}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            يمكنك تصفح وإضافة {activeTab === 'umrah' ? 'برامج العمرة' : 'برامج الحج'}، سيتم تجميعها تلقائياً حسب التصنيف.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 w-full sm:w-auto">
          <Link
            href={`/admin/programs/create?type=${activeTab}`}
            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            إضافة برنامج جديد
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        {isLoading ? (
          <div className="py-20 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-500" />
            <p className="mt-2 text-sm text-gray-500">جاري تحميل البيانات...</p>
          </div>
        ) : error ? (
          <div className="py-20 text-center text-red-500 text-sm">
            حدث خطأ أثناء تحميل البيانات. يرجى التأكد من إنشاء قاعدة البيانات أولاً.
          </div>
        ) : filteredPrograms.length === 0 ? (
          <div className="py-20 text-center text-gray-500 bg-white shadow rounded-lg">
            <Plane className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            لا توجد برامج مضافة في هذا القسم حتى الآن.
          </div>
        ) : (
          Object.entries(groupedPrograms).map(([category, programsList]) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4 px-2 border-r-4 border-blue-500">{category}</h2>
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300 text-right">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pr-6">اسم البرنامج</th>
                          <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">السعر</th>
                          <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">المدة</th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">إجراءات</span></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {programsList.map((program) => (
                          <tr key={program.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pr-6">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img className="h-10 w-10 rounded-full object-cover" src={program.featuredImage || 'https://via.placeholder.com/150'} alt="" />
                                </div>
                                <div className="mr-4">
                                  <div className="font-medium text-gray-900">{program.title}</div>
                                  <div className="text-gray-500">{program.slug}</div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{program.price}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{program.durationDays} أيام / {program.durationNights} ليالي</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                              <div className="flex items-center justify-end gap-3">
                                <Link href={`/admin/programs/edit?id=${program.id}`} className="text-blue-600 hover:text-blue-900">
                                  <Edit className="h-5 w-5" />
                                  <span className="sr-only">تعديل {program.title}</span>
                                </Link>
                                <button onClick={() => handleDelete(program.id)} className="text-red-600 hover:text-red-900" disabled={deleteMutation.isPending}>
                                  <Trash2 className="h-5 w-5" />
                                  <span className="sr-only">حذف {program.title}</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default function ProgramsPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-500" />
        <p className="mt-2 text-sm text-gray-500">جاري تحميل البيانات...</p>
      </div>
    }>
      <ProgramsList />
    </Suspense>
  )
}

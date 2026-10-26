'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import Link from 'next/link'
import { Plus, Edit, Trash2, Loader2, Plane, ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'
import { TravelProgram } from '@/data/programsData'
import toast from 'react-hot-toast'

function ProgramsList() {
  const queryClient = useQueryClient()
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') === 'hajj' ? 'hajj' : 'umrah'
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const reorderMutation = useMutation({
    mutationFn: (newOrderIds: string[]) => api.reorderPrograms(newOrderIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['programs'] })
      toast.success('تم حفظ الترتيب الجديد بنجاح!')
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['programs'] })
      toast.error('حدث خطأ أثناء حفظ الترتيب.')
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

  // Filter programs by active tab (umrah / hajj)
  const filteredPrograms = useMemo(() => {
    return programs?.filter((p) => p.type === activeTab) || []
  }, [programs, activeTab])

  // Extract unique category labels from programs
  const categoriesList = useMemo(() => {
    const cats = new Set<string>()
    filteredPrograms.forEach(p => {
      (p.categoryLabel || '').split(',').map(s => s.trim()).filter(Boolean).forEach(c => cats.add(c))
    })
    return Array.from(cats)
  }, [filteredPrograms])

  // Filtered by selected category chip if any
  const displayedPrograms = useMemo(() => {
    if (selectedCategory === 'all') return filteredPrograms
    return filteredPrograms.filter(p => {
      const labels = (p.categoryLabel || '').split(',').map(s => s.trim()).filter(Boolean)
      return labels.includes(selectedCategory)
    })
  }, [filteredPrograms, selectedCategory])

  // Move program up or down in order
  const handleMove = (indexInFiltered: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? indexInFiltered - 1 : indexInFiltered + 1
    if (targetIndex < 0 || targetIndex >= filteredPrograms.length) return

    const newPrograms = [...filteredPrograms]
    const temp = newPrograms[indexInFiltered]
    newPrograms[indexInFiltered] = newPrograms[targetIndex]
    newPrograms[targetIndex] = temp

    // Optimistically update React Query cache
    queryClient.setQueryData(['programs'], (oldData: TravelProgram[] | undefined) => {
      if (!oldData) return newPrograms
      const others = oldData.filter(p => p.type !== activeTab)
      return [...newPrograms, ...others]
    })

    // Call backend API to persist order
    const orderedIds = newPrograms.map(p => p.id)
    reorderMutation.mutate(orderedIds)
  }

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {activeTab === 'umrah' ? 'إدارة وترتيب برامج العمرة' : 'إدارة وترتيب برامج الحج'}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            يمكنك إضافة البرامج وتحديد تصنيفاتها وترتيب ظهورها على الموقع باستخدام أزرار الترتيب (الأعلى / الأسفل).
          </p>
        </div>
        <div className="mt-4 sm:mt-0 w-full sm:w-auto">
          <Link
            href={`/admin/programs/create?type=${activeTab}`}
            className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto transition-colors gap-2"
          >
            <Plus className="h-5 w-5" />
            <span>إضافة برنامج جديد</span>
          </Link>
        </div>
      </div>

      {/* Category filter chips */}
      {categoriesList.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-200">
          <span className="text-xs font-bold text-gray-500 ml-2">تصفية حسب التصنيف:</span>
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            الكل ({filteredPrograms.length})
          </button>
          {categoriesList.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Programs Table */}
      <div className="mt-4 flex flex-col">
        {isLoading ? (
          <div className="py-20 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-500" />
            <p className="mt-2 text-sm text-gray-500">جاري تحميل البيانات...</p>
          </div>
        ) : error ? (
          <div className="py-20 text-center text-red-500 text-sm">
            حدث خطأ أثناء تحميل البيانات. يرجى التأكد من إنشاء قاعدة البيانات أولاً.
          </div>
        ) : displayedPrograms.length === 0 ? (
          <div className="py-20 text-center text-gray-500 bg-white shadow rounded-2xl border border-gray-100">
            <Plane className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            لا توجد برامج مضافة في هذا القسم حتى الآن.
          </div>
        ) : (
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-2xl bg-white border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-right">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pr-4 pl-3 text-xs font-bold text-gray-500 uppercase tracking-wider w-16 text-center">
                    الترتيب
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    اسم البرنامج
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    التصنيفات
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    السعر
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    المدة
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                    ترتيب العرض
                  </th>
                  <th scope="col" className="relative py-3.5 pl-4 pr-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    إجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {displayedPrograms.map((program) => {
                  const originalIndex = filteredPrograms.findIndex(p => p.id === program.id)
                  const isFirst = originalIndex === 0
                  const isLast = originalIndex === filteredPrograms.length - 1
                  const categories = (program.categoryLabel || 'غير مصنف')
                    .split(',')
                    .map(s => s.trim())
                    .filter(Boolean)

                  return (
                    <tr key={program.id} className="hover:bg-gray-50/80 transition-colors">
                      {/* Order Number */}
                      <td className="whitespace-nowrap py-4 pr-4 pl-3 text-center">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-800 font-black text-xs border border-gray-200">
                          {originalIndex + 1}
                        </span>
                      </td>

                      {/* Title & Image */}
                      <td className="whitespace-nowrap py-4 pr-4 pl-3 text-sm">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0 relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <img
                              className="h-full w-full object-cover"
                              src={program.featuredImage || 'https://via.placeholder.com/150'}
                              alt={program.title}
                            />
                          </div>
                          <div className="mr-3">
                            <div className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
                              {program.title}
                            </div>
                            <div className="text-xs text-gray-500 font-mono mt-0.5">{program.slug}</div>
                          </div>
                        </div>
                      </td>

                      {/* Categories Badges */}
                      <td className="py-4 px-3 text-sm">
                        <div className="flex flex-wrap gap-1.5 max-w-xs">
                          {categories.map((catLabel, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200"
                            >
                              {catLabel}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Price */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-brand-burgundy">
                        {program.price} ج.م
                      </td>

                      {/* Duration */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                        {program.durationDays} أيام / {program.durationNights} ليالي
                      </td>

                      {/* Reorder Buttons (Move Up / Down) */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                        <div className="inline-flex items-center gap-1.5 bg-gray-50 p-1 rounded-xl border border-gray-200 shadow-sm">
                          <button
                            type="button"
                            onClick={() => handleMove(originalIndex, 'up')}
                            disabled={isFirst || reorderMutation.isPending}
                            title="تحريك لأعلى (تقديم الترتيب)"
                            className="p-1.5 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-sm disabled:opacity-25 disabled:pointer-events-none transition-all"
                          >
                            <ArrowUp className="h-4 w-4" />
                          </button>
                          <span className="text-[11px] font-black text-gray-400 px-1">
                            {originalIndex + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleMove(originalIndex, 'down')}
                            disabled={isLast || reorderMutation.isPending}
                            title="تحريك لأسفل (تأخير الترتيب)"
                            className="p-1.5 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-sm disabled:opacity-25 disabled:pointer-events-none transition-all"
                          >
                            <ArrowDown className="h-4 w-4" />
                          </button>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/admin/programs/edit?id=${program.id}`}
                            className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-colors"
                            title="تعديل البرنامج"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(program.id)}
                            className="p-2 rounded-lg text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors"
                            disabled={deleteMutation.isPending}
                            title="حذف البرنامج"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
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

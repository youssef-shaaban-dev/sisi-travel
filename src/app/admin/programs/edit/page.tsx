'use client'

import { ProgramForm } from '@/components/ProgramForm'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

function EditProgramContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const { data: program, isLoading, error } = useQuery({
    queryKey: ['program', id],
    queryFn: () => id ? api.getProgram(id) : Promise.reject('No ID'),
    enabled: !!id,
  })

  if (!id) {
    return <div className="text-red-500 text-center py-10">معرف البرنامج غير موجود.</div>
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (error || !program) {
    return <div className="text-red-500 text-center py-10">حدث خطأ أثناء تحميل بيانات البرنامج.</div>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">تعديل البرنامج</h1>
        <p className="mt-2 text-sm text-gray-700">
          تعديل تفاصيل {program.title}
        </p>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <ProgramForm initialData={program} isEdit />
      </div>
    </div>
  )
}

export default function EditProgramPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    }>
      <EditProgramContent />
    </Suspense>
  )
}

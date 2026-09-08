'use client'

import { Suspense } from 'react'
import { ProgramForm } from '@/components/ProgramForm'

export default function CreateProgramPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">إضافة برنامج جديد</h1>
        <p className="mt-2 text-sm text-gray-700">
          قم بملء البيانات أدناه لإضافة برنامج حج أو عمرة جديد. سيتم عرض البيانات فوراً على الموقع.
        </p>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <Suspense fallback={<div className="p-4 text-center">جاري التحميل...</div>}>
          <ProgramForm />
        </Suspense>
      </div>
    </div>
  )
}

'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { Plane, TrendingUp, Users, Loader2 } from 'lucide-react'

export default function AdminDashboardPage() {
  const { data: programs, isLoading } = useQuery({
    queryKey: ['programs'],
    queryFn: () => api.getPrograms(),
  })

  const programsCount = programs?.length || 0
  const featuredCount = programs?.filter(p => p.is_featured || p.isFeatured)?.length || 0

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">لوحة القيادة</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Stat card 1 */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Plane className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">إجمالي البرامج</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{programsCount}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Stat card 2 */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">البرامج المميزة</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{featuredCount}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Stat card 3 */}
        <div className="bg-white overflow-hidden shadow rounded-lg opacity-50">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">إجمالي العملاء</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">قريباً</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">مرحباً بك في لوحة تحكم سيسي ترافل</h2>
          <p className="text-gray-600 mb-4">
            من هنا يمكنك إدارة جميع برامج الحج والعمرة. كافة البيانات التي ستقوم بإدخالها ستنعكس مباشرة على الموقع.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>إضافة برامج جديدة للحج والعمرة.</li>
            <li>تعديل البيانات والصور والفنادق للبرامج الحالية.</li>
            <li>رفع الصور وتخزينها سحابياً بكل سهولة.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

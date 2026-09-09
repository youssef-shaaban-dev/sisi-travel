'use client'

import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api, Category } from '@/lib/api'
import { Plus, Pencil, Trash2, X, Check, Tags } from 'lucide-react'
import toast from 'react-hot-toast'
import { generateSlug } from '@/utils/helpers'

export default function CategoriesPage() {
  const queryClient = useQueryClient()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<Partial<Category>>({
    label: '',
    slug: '',
    type: 'umrah'
  })

  // Queries
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => api.getCategories()
  })

  // Mutations
  const createMutation = useMutation({
    mutationFn: (category: Partial<Category>) => api.createCategory(category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      toast.success('تم إضافة التصنيف بنجاح')
      setIsAdding(false)
      resetForm()
    },
    onError: (error) => {
      toast.error('حدث خطأ أثناء الإضافة: ' + error.message)
    }
  })

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string, data: Partial<Category> }) => api.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      toast.success('تم تحديث التصنيف بنجاح')
      setEditingId(null)
      resetForm()
      setIsAdding(false)
    },
    onError: (error) => {
      toast.error('حدث خطأ أثناء التحديث: ' + error.message)
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      toast.success('تم حذف التصنيف بنجاح')
    },
    onError: (error) => {
      toast.error('حدث خطأ أثناء الحذف: ' + error.message)
    }
  })

  const resetForm = () => {
    setFormData({ label: '', slug: '', type: 'umrah' })
  }

  const handleEdit = (cat: Category) => {
    setFormData({ label: cat.label, slug: cat.slug, type: cat.type })
    setEditingId(cat.id)
    setIsAdding(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Auto generate slug if empty
    let finalSlug = formData.slug
    if (!finalSlug && formData.label) {
      finalSlug = generateSlug(formData.label)
    }

    const payload = { ...formData, slug: finalSlug || `cat-${Date.now()}` }

    if (editingId) {
      updateMutation.mutate({ id: editingId, data: payload })
    } else {
      createMutation.mutate(payload)
    }
  }

  const handleDelete = (id: string) => {
    toast((t) => (
      <div className="flex flex-col gap-4">
        <span className="font-bold text-gray-900 text-right">هل أنت متأكد من الحذف؟ لا يمكن التراجع.</span>
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة التصنيفات</h1>
          <p className="mt-1 text-sm text-gray-500">
            أضف وعدّل تصنيفات البرامج (مثل: عمرة VIP، حج بري) لاستخدامها عند إضافة برنامج جديد.
          </p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setEditingId(null)
            setIsAdding(true)
          }}
          className="inline-flex items-center justify-center gap-2 bg-brand-burgundy text-white px-4 py-2.5 rounded-lg hover:bg-brand-burgundy-light transition-colors w-full sm:w-auto"
        >
          <Plus className="w-5 h-5" />
          إضافة تصنيف
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              {editingId ? 'تعديل التصنيف' : 'تصنيف جديد'}
            </h2>
            <button onClick={() => { setIsAdding(false); resetForm(); setEditingId(null) }} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">اسم التصنيف (بالعربية)</label>
                <input
                  type="text"
                  required
                  value={formData.label || ''}
                  onChange={e => {
                    const newLabel = e.target.value;
                    if (!editingId) {
                      setFormData(prev => ({...prev, label: newLabel, slug: generateSlug(newLabel)}));
                    } else {
                      setFormData(prev => ({...prev, label: newLabel}));
                    }
                  }}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-burgundy focus:ring-brand-burgundy text-right"
                  placeholder="مثال: عمرة 5 نجوم"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">رابط التصنيف (Slug - بالإنجليزي)</label>
                <input
                  type="text"
                  value={formData.slug || ''}
                  onChange={e => setFormData({...formData, slug: e.target.value})}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-burgundy focus:ring-brand-burgundy text-left"
                  dir="ltr"
                  placeholder="مثال: umrah-5-stars"
                />
                <p className="text-xs text-gray-500 mt-1">يُفضل تركه فارغاً ليتم توليده تلقائياً</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">القسم</label>
                <select
                  value={formData.type || 'umrah'}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-burgundy focus:ring-brand-burgundy text-right"
                >
                  <option value="umrah">عمرة</option>
                  <option value="hajj">حج</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={createMutation.isPending || updateMutation.isPending}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-burgundy-dark font-bold px-6 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
              >
                {(createMutation.isPending || updateMutation.isPending) ? (
                  <div className="w-5 h-5 border-2 border-brand-burgundy-dark border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Check className="w-5 h-5" />
                )}
                حفظ التصنيف
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Categories List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">جاري تحميل التصنيفات...</div>
        ) : categories.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Tags className="w-12 h-12 mx-auto text-gray-300 mb-3" />
            لا توجد تصنيفات حالياً. قم بإضافة أول تصنيف.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-right text-sm font-bold text-gray-900">الاسم</th>
                  <th scope="col" className="px-6 py-4 text-right text-sm font-bold text-gray-900">الرابط (Slug)</th>
                  <th scope="col" className="px-6 py-4 text-right text-sm font-bold text-gray-900">القسم</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">إجراءات</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {cat.label}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" dir="ltr">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">{cat.slug}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                        cat.type === 'umrah' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {cat.type === 'umrah' ? 'عمرة' : 'حج'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium space-x-2 space-x-reverse">
                      <button
                        onClick={() => handleEdit(cat)}
                        className="text-blue-600 hover:text-blue-900 bg-blue-50 p-2 rounded-lg transition-colors inline-flex"
                        title="تعديل"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-lg transition-colors inline-flex"
                        title="حذف"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

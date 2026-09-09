'use client'

import { useState, useEffect } from 'react'

import { TravelProgram} from '@/data/programsData'
import { api } from '@/lib/api'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2, Plus, Trash2, X } from 'lucide-react'
import { useForm as useRHForm, useFieldArray as useRHFieldArray, FieldErrors } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { generateSlug } from '@/utils/helpers'

interface ProgramFormProps {
  initialData?: TravelProgram
  isEdit?: boolean
}

// Ensure defaults for all array fields
const defaultValues: Partial<TravelProgram> = {
  type: 'umrah',
  title: '',
  slug: '',
  category: 'economic',
  categoryLabel: '',
  subtitle: '',
  summary: '',
  featuredImage: '',
  galleryImages: [],
  durationDays: 1,
  durationNights: 1,
  meccaNights: 0,
  medinaNights: 0,
  price: '',
  priceNote: '',
  badgeText: '',
  isFeatured: false,
  airline: '',
  flightType: '',
  hotels: [],
  includedServices: [],
  excludedServices: [],
  importantNotes: [],
  itinerary: [],
}

export function ProgramForm({ initialData, isEdit }: ProgramFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlType = searchParams.get('type') === 'hajj' ? 'hajj' : 'umrah'
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const { register, control, handleSubmit, watch, setValue } = useRHForm<TravelProgram>({
    defaultValues: {
      ...defaultValues,
      type: initialData?.type || urlType,
      ...initialData
    },
  })

  // Fetch Categories
  const { data: categories = [], isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories', watch('type')],
    queryFn: () => api.getCategories(watch('type'))
  })

  // Dynamic lists
  const { fields: hotelFields, append: appendHotel, remove: removeHotel } = useRHFieldArray({ control, name: 'hotels' })
  const { fields: itineraryFields, append: appendItinerary, remove: removeItinerary } = useRHFieldArray({ control, name: 'itinerary' })
  
  // For simple string arrays, we manage them via state to keep it simple, or using string inputs
  const watchGallery = watch('galleryImages') || []
  const watchIncluded = watch('includedServices') || []
  const watchExcluded = watch('excludedServices') || []
  const watchNotes = watch('importantNotes') || []
  const watchTitle = watch('title')

  // Auto-generate slug from title
  useEffect(() => {
    if (!isEdit && typeof watchTitle === 'string') {
      const generatedSlug = generateSlug(watchTitle)
      setValue('slug', generatedSlug, { shouldValidate: true })
    }
  }, [watchTitle, isEdit, setValue])

  // Image Upload Handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'featuredImage' | 'galleryImages') => {
    const files = e.target.files
    if (!files || files.length === 0) return

    try {
      if (fieldName === 'featuredImage') {
        // Just upload first file
        const url = await api.uploadImage(files[0])
        setValue('featuredImage', url)
      } else {
        // Upload multiple
        const urls = await Promise.all(Array.from(files).map(f => api.uploadImage(f)))
        setValue('galleryImages', [...watchGallery, ...urls])
      }
      toast.success('تم رفع الصورة بنجاح')
    } catch (err) {
      toast.error('فشل رفع الصورة.')
    }
  }

  const onSubmit = async (data: TravelProgram) => {
    if (!data.featuredImage) {
      toast.error('يرجى رفع الصورة الرئيسية للبرنامج (في تبويب البيانات الأساسية).')
      setActiveTab(0)
      return
    }

    setIsSubmitting(true)
    try {
      if (isEdit && initialData?.id) {
        await api.updateProgram(initialData.id, data)
        toast.success('تم تحديث البرنامج بنجاح!')
      } else {
        await api.createProgram(data)
        toast.success('تمت إضافة البرنامج بنجاح!')
      }
      router.push('/admin/programs')
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : (error as { message?: string })?.message || 'خطأ غير معروف'
      toast.error('حدث خطأ أثناء حفظ البيانات: ' + msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onError = (errors: FieldErrors<TravelProgram>) => {
    toast.error('يرجى ملء جميع الحقول الإجبارية (المميزة بنجمة حمراء).')
    // Auto-switch to the first tab if there are errors there
    if (errors.title || errors.slug || errors.category || errors.price || errors.featuredImage) {
      setActiveTab(0)
    }
  }

  const tabs = ['البيانات الأساسية', 'معرض الصور', 'الفنادق والطيران', 'خط السير', 'خدمات وملاحظات']

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-8 divide-y divide-gray-200">
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-8 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`${
                activeTab === idx
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="pt-6">
        
        {/* TAB 0: Basic Info */}
        <div className={activeTab === 0 ? 'block space-y-6' : 'hidden'}>
          {/* Featured Image - Required */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <label className="block text-sm font-bold text-gray-900 mb-2">الصورة الرئيسية للبرنامج <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-4">
              {watch('featuredImage') ? (
                <div className="relative">
                  <img src={watch('featuredImage')} className="h-24 w-32 object-cover rounded shadow-sm border border-gray-200" alt="Main" />
                  <button type="button" onClick={() => setValue('featuredImage', '')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow">
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <div className="h-24 w-32 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                  <span className="text-xs">لا توجد صورة</span>
                </div>
              )}
              <label className="cursor-pointer inline-flex items-center gap-2 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Plus size={16} />
                <span>{watch('featuredImage') ? 'تغيير الصورة' : 'رفع الصورة الرئيسية'}</span>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'featuredImage')} />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* Type is now hidden and managed implicitly via URL or initialData */}
            <input type="hidden" {...register('type')} />

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">اسم البرنامج <span className="text-red-500">*</span></label>
              <input type="text" {...register('title', { required: true })} placeholder="مثال: عمرة الخمس نجوم الـ VIP" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">الرابط (Slug) <span className="text-red-500">*</span></label>
              <input type="text" {...register('slug', { required: true })} dir="ltr" placeholder="مثال: umrah-vip-5stars" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
              <p className="mt-1 text-xs text-gray-500">يتم توليده تلقائياً من اسم البرنامج.</p>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium text-gray-700">التصنيف <span className="text-red-500">*</span></label>
              {isLoadingCategories ? (
                <div className="mt-1 p-2 text-sm text-gray-500">جاري تحميل التصنيفات...</div>
              ) : (
                <select 
                  {...register('category', { required: true })}
                  onChange={(e) => {
                    const selectedCat = categories.find(c => c.slug === e.target.value);
                    setValue('category', e.target.value, { shouldValidate: true });
                    if (selectedCat) {
                      setValue('categoryLabel', selectedCat.label, { shouldValidate: true });
                    }
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                >
                  <option value="">اختر التصنيف...</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.slug}>{cat.label}</option>
                  ))}
                </select>
              )}
              {categories.length === 0 && !isLoadingCategories && (
                <p className="mt-1 text-xs text-red-500">لا توجد تصنيفات مضافة، يرجى إضافة تصنيف من قسم التصنيفات أولاً.</p>
              )}
              <input type="hidden" {...register('categoryLabel')} />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">السعر <span className="text-red-500">*</span></label>
              <input type="text" {...register('price', { required: true })} placeholder="مثال: 45,000 ج.م" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">ملاحظة السعر</label>
              <input type="text" {...register('priceNote')} placeholder="مثال: للفرد في الغرفة الرباعية" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">وسام البرنامج (Badge)</label>
              <input type="text" {...register('badgeText')} placeholder="مثال: الأكثر طلباً" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">عنوان فرعي قصير (Subtitle)</label>
              <input type="text" {...register('subtitle')} placeholder="مثال: تجربة إيمانية استثنائية مع إقامة في أرقى الفنادق" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">وصف البرنامج (Summary)</label>
              <textarea {...register('summary')} rows={3} placeholder="اكتب وصفاً جذاباً للبرنامج يظهر في صفحة التفاصيل..." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
            
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">الأيام</label>
              <input type="number" {...register('durationDays', { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">الليالي</label>
              <input type="number" {...register('durationNights', { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">ليالي مكة</label>
              <input type="number" {...register('meccaNights', { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">ليالي المدينة</label>
              <input type="number" {...register('medinaNights', { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
            
            <div className="sm:col-span-6 flex items-center mt-4">
              <input type="checkbox" {...register('isFeatured')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label className="ml-2 block text-sm text-gray-900 mr-2">إبراز البرنامج في الصفحة الرئيسية</label>
            </div>
          </div>
        </div>

        {/* TAB 1: Images (Gallery) */}
        <div className={activeTab === 1 ? 'block space-y-6' : 'hidden'}>
          <div>
            <label className="block text-sm font-medium text-gray-700">معرض الصور الإضافية (اختياري)</label>
            <p className="text-xs text-gray-500 mb-4">هذه الصور ستظهر في صفحة تفاصيل البرنامج بالأسفل.</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
              {watchGallery.map((url, i) => (
                <div key={i} className="relative">
                  <img src={url} className="h-24 w-full object-cover rounded" alt="" />
                  <button type="button" onClick={() => setValue('galleryImages', watchGallery.filter((_, idx) => idx !== i))} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                    <X size={14} />
                  </button>
                </div>
              ))}
              <label className="cursor-pointer h-24 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 text-gray-500">
                <Plus size={24} />
                <span className="text-xs mt-1">إضافة صور</span>
                <input type="file" multiple className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'galleryImages')} />
              </label>
            </div>
          </div>
        </div>

        {/* TAB 2: Hotels & Flights */}
        <div className={activeTab === 2 ? 'block space-y-6' : 'hidden'}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">شركات الطيران</label>
              <input type="text" {...register('airline')} placeholder="مثال: مصر للطيران / الخطوط السعودية" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">نوع الطيران</label>
              <input type="text" {...register('flightType')} placeholder="مثال: طيران مباشر (القاهرة - جدة)" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">الفنادق</h3>
              <button type="button" onClick={() => appendHotel({ name: '', city: 'مكة المكرمة', stars: 5, distance: '' })} className="text-blue-600 flex items-center text-sm font-medium">
                <Plus size={16} className="mr-1 ml-1" /> إضافة فندق
              </button>
            </div>
            <div className="space-y-4">
              {hotelFields.map((field, index) => (
                <div key={field.id} className="p-4 border border-gray-200 rounded-lg relative bg-gray-50">
                  <button type="button" onClick={() => removeHotel(index)} className="absolute top-4 left-4 text-red-500">
                    <Trash2 size={18} />
                  </button>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:pr-8 pr-0 mt-6 sm:mt-0">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-gray-700">الاسم</label>
                      <input type="text" {...register(`hotels.${index}.name` as const)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">المدينة</label>
                      <select {...register(`hotels.${index}.city` as const)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border">
                        <option value="مكة المكرمة">مكة المكرمة</option>
                        <option value="المدينة المنورة">المدينة المنورة</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">النجوم</label>
                      <input type="number" {...register(`hotels.${index}.stars` as const, { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" />
                    </div>
                    <div className="col-span-4">
                      <label className="block text-xs font-medium text-gray-700">المسافة/الوصف</label>
                      <input type="text" {...register(`hotels.${index}.distance` as const)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TAB 3: Itinerary */}
        <div className={activeTab === 3 ? 'block space-y-6' : 'hidden'}>
           <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">خط سير الرحلة اليومي</h3>
            <button type="button" onClick={() => appendItinerary({ dayNumber: itineraryFields.length + 1, title: '', description: '' })} className="text-blue-600 flex items-center text-sm font-medium">
              <Plus size={16} className="mr-1 ml-1" /> إضافة يوم
            </button>
          </div>
          <div className="space-y-4">
            {itineraryFields.map((field, index) => (
              <div key={field.id} className="p-4 border border-gray-200 rounded-lg relative flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-20">
                  <label className="block text-xs font-medium text-gray-700">اليوم</label>
                  <input type="number" {...register(`itinerary.${index}.dayNumber` as const, { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border text-center" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700">العنوان</label>
                    <input type="text" {...register(`itinerary.${index}.title` as const)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">التفاصيل</label>
                    <textarea {...register(`itinerary.${index}.description` as const)} rows={2} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" />
                  </div>
                </div>
                <div className="pt-2 sm:pt-6 absolute sm:relative top-2 left-2 sm:top-0 sm:left-0">
                   <button type="button" onClick={() => removeItinerary(index)} className="text-red-500 bg-red-50 p-1.5 rounded-lg hover:bg-red-100 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TAB 4: Services & Notes */}
        <div className={activeTab === 4 ? 'block space-y-6' : 'hidden'}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
               <h3 className="text-md font-medium mb-2">الخدمات المشمولة</h3>
               <textarea 
                  rows={5} 
                  className="w-full rounded-md border border-gray-300 p-2 text-sm" 
                  placeholder="خدمة في كل سطر..."
                  value={watchIncluded.join('\n')}
                  onChange={(e) => setValue('includedServices', e.target.value.split('\n').filter(Boolean))}
               />
            </div>
            <div>
               <h3 className="text-md font-medium mb-2">الخدمات غير المشمولة</h3>
               <textarea 
                  rows={5} 
                  className="w-full rounded-md border border-gray-300 p-2 text-sm" 
                  placeholder="خدمة في كل سطر..."
                  value={watchExcluded.join('\n')}
                  onChange={(e) => setValue('excludedServices', e.target.value.split('\n').filter(Boolean))}
               />
            </div>
            <div className="lg:col-span-2">
               <h3 className="text-md font-medium mb-2">ملاحظات هامة</h3>
               <textarea 
                  rows={4} 
                  className="w-full rounded-md border border-gray-300 p-2 text-sm" 
                  placeholder="ملاحظة في كل سطر..."
                  value={watchNotes.join('\n')}
                  onChange={(e) => setValue('importantNotes', e.target.value.split('\n').filter(Boolean))}
               />
            </div>
          </div>
        </div>

      </div>

      <div className="pt-5 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-0">
        <button
          type="button"
          onClick={() => router.push('/admin/programs')}
          className="bg-white py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
        >
          إلغاء
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="sm:mr-3 inline-flex justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
        >
          {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : 'حفظ البرنامج'}
        </button>
      </div>
    </form>
  )
}

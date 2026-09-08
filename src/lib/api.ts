import { createClient } from '@/utils/supabase/client'
import { TravelProgram } from '@/data/programsData'

export const api = {
  // Programs
  getPrograms: async (category?: string) => {
    const supabase = createClient()
    let query = supabase.from('programs').select('*').order('created_at', { ascending: false })
    
    if (category && category !== 'all') {
      query = query.eq('category', category)
    }

    const { data, error } = await query
    if (error) throw error
    return data
  },
  
  getProgram: async (id: string) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('programs').select('*').eq('id', id).single()
    if (error) throw error
    return data
  },
  
  createProgram: async (program: Partial<TravelProgram>) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('programs').insert([program]).select().single()
    if (error) throw error
    return data
  },
  
  updateProgram: async (id: string, program: Partial<TravelProgram>) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('programs').update(program).eq('id', id).select().single()
    if (error) throw error
    return data
  },
  
  deleteProgram: async (id: string) => {
    const supabase = createClient()
    const { error } = await supabase.from('programs').delete().eq('id', id)
    if (error) throw error
    return true
  },

  // Upload Image to Supabase Storage
  uploadImage: async (file: File) => {
    const supabase = createClient()
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    
    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, file)

    if (error) throw error

    const { data: publicUrlData } = supabase.storage
      .from('images')
      .getPublicUrl(fileName)

    return publicUrlData.publicUrl
  }
}

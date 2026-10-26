import { createClient } from '@/utils/supabase/client'
import { TravelProgram } from '@/data/programsData'

export interface Category {
  id: string;
  slug: string;
  label: string;
  type: string;
  created_at?: string;
}

export const api = {
  // Programs
  getPrograms: async (category?: string) => {
    const supabase = createClient()
    let query = supabase.from('programs').select('*').order('created_at', { ascending: false })
    
    if (category && category !== 'all') {
      query = query.like('category', `%${category}%`)
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
  
  getProgramBySlug: async (slug: string): Promise<TravelProgram | null> => {
    const supabase = createClient()
    const { data, error } = await supabase.from('programs').select('*').eq('slug', slug).single()
    if (error) {
      console.warn(`Program not found by slug: ${slug}`)
      return null
    }
    return data as TravelProgram
  },
  
  createProgram: async (program: Partial<TravelProgram>) => {
    const supabase = createClient()
    try {
      const { data, error } = await supabase.from('programs').insert([program]).select().single()
      if (error) throw error
      return data
    } catch (err: unknown) {
      const errorObj = err as { code?: string; message?: string }
      if (errorObj?.code === 'PGRST204' || errorObj?.message?.includes('column')) {
        // Fallback: if columns ribbonText or originalPrice do not exist yet in database,
        // map ribbonText to badgeText so the ribbon works immediately without crashing
        const fallback = { ...program } as Record<string, unknown>
        if (!fallback.badgeText && fallback.ribbonText) {
          fallback.badgeText = fallback.ribbonText
        }
        delete fallback.ribbonText
        delete fallback.originalPrice
        const { data, error } = await supabase.from('programs').insert([fallback]).select().single()
        if (error) throw error
        return data
      }
      throw err
    }
  },
  
  updateProgram: async (id: string, program: Partial<TravelProgram>) => {
    const supabase = createClient()
    try {
      const { data, error } = await supabase.from('programs').update(program).eq('id', id).select().single()
      if (error) throw error
      return data
    } catch (err: unknown) {
      const errorObj = err as { code?: string; message?: string }
      if (errorObj?.code === 'PGRST204' || errorObj?.message?.includes('column')) {
        // Fallback: if columns ribbonText or originalPrice do not exist yet in database,
        // map ribbonText to badgeText so the ribbon works immediately without crashing
        const fallback = { ...program } as Record<string, unknown>
        if (!fallback.badgeText && fallback.ribbonText) {
          fallback.badgeText = fallback.ribbonText
        }
        delete fallback.ribbonText
        delete fallback.originalPrice
        const { data, error } = await supabase.from('programs').update(fallback).eq('id', id).select().single()
        if (error) throw error
        return data
      }
      throw err
    }
  },
  
  deleteProgram: async (id: string) => {
    const supabase = createClient()
    const { error } = await supabase.from('programs').delete().eq('id', id)
    if (error) throw error
    return true
  },

  reorderPrograms: async (orderedIds: string[]) => {
    const supabase = createClient()
    const now = Date.now()
    // Update each program's created_at timestamp in descending order so index 0 is first
    const updates = orderedIds.map((id, index) => {
      const timestamp = new Date(now - index * 1000).toISOString()
      return supabase.from('programs').update({ created_at: timestamp }).eq('id', id)
    })
    const results = await Promise.all(updates)
    const err = results.find(r => r.error)
    if (err && err.error) throw err.error
    return true
  },

  // Categories
  getCategories: async (type?: string) => {
    const supabase = createClient()
    let query = supabase.from('categories').select('*').order('created_at', { ascending: true })
    if (type) {
      query = query.eq('type', type)
    }
    const { data, error } = await query
    if (error) throw error
    return data as Category[]
  },

  createCategory: async (category: Partial<Category>) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('categories').insert([category]).select().single()
    if (error) throw error
    return data
  },

  updateCategory: async (id: string, category: Partial<Category>) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('categories').update(category).eq('id', id).select().single()
    if (error) throw error
    return data
  },

  deleteCategory: async (id: string) => {
    const supabase = createClient()
    const { error } = await supabase.from('categories').delete().eq('id', id)
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

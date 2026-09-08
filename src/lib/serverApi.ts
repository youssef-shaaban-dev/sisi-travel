import { createClient } from '@supabase/supabase-js'
import { TravelProgram } from '@/data/programsData'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const serverApi = {
  getPrograms: async (category?: string): Promise<TravelProgram[]> => {
    let query = supabase.from('programs').select('*').order('created_at', { ascending: false })
    
    // We filter dynamically in the components now, but keeping this for compatibility
    if (category && category !== 'all') {
      // Assuming 'umrah' means any category starting with 'umrah'
      if (category === 'umrah' || category === 'hajj') {
        query = query.like('category', `${category}%`)
      } else {
        query = query.eq('category', category)
      }
    }

    const { data, error } = await query
    if (error) {
      console.error('Error fetching programs:', error)
      return [] // Fallback to empty array on build error
    }
    return data as TravelProgram[]
  },
  
  getProgramBySlug: async (slug: string): Promise<TravelProgram | null> => {
    const { data, error } = await supabase.from('programs').select('*').eq('slug', slug).single()
    if (error) {
      console.error(`Error fetching program ${slug}:`, error)
      return null
    }
    return data as TravelProgram
  }
}

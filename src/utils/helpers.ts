export const transliterateArabic = (text: string) => {
  const arMap: Record<string, string> = {
    'ا': 'a', 'أ': 'a', 'إ': 'e', 'آ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th',
    'ج': 'g', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'th', 'ر': 'r', 'ز': 'z',
    'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': 'a',
    'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
    'ه': 'h', 'ة': 'h', 'و': 'w', 'ؤ': 'o', 'ي': 'y', 'ى': 'a', 'ئ': 'e', 'ء': 'a'
  }
  return text.split('').map(char => arMap[char] || char).join('')
}

export const generateSlug = (text: string) => {
  if (!text) return ''
  const transliterated = transliterateArabic(text)
  return transliterated
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // allow ONLY english, numbers, spaces, hyphens
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-') // remove consecutive hyphens
}

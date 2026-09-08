'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { LayoutDashboard, Plane, LogOut, Menu, X, Tags } from 'lucide-react'
import { ReactQueryProvider } from '@/components/ReactQueryProvider'
import { Toaster } from 'react-hot-toast'

const navigation = [
  { name: 'لوحة القيادة', href: '/admin', icon: LayoutDashboard },
  { name: 'التصنيفات', href: '/admin/categories', icon: Tags },
  { name: 'برامج الحج', href: '/admin/programs?type=hajj', icon: Plane },
  { name: 'برامج العمرة', href: '/admin/programs?type=umrah', icon: Plane },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      const normalizedPath = pathname.replace(/\/$/, '')
      if (!session && normalizedPath !== '/admin/login') {
        router.push('/admin/login')
      } else {
        setIsCheckingAuth(false)
      }
    }
    
    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const normalizedPath = pathname.replace(/\/$/, '')
      if (!session && normalizedPath !== '/admin/login') {
        router.push('/admin/login')
      }
    })

    return () => subscription.unsubscribe()
  }, [pathname, router, supabase.auth])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  const normalizedPath = pathname.replace(/\/$/, '')

  if (isCheckingAuth && normalizedPath !== '/admin/login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Don't show sidebar on login page
  if (normalizedPath === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div dir="rtl" className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setSidebarOpen(false)}
        />
        <div className={`relative flex-1 flex flex-col max-w-xs w-full bg-slate-900 transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-white text-2xl font-bold">سيسي ترافل</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => {
                const navPath = item.href.split('?')[0].replace(/\/$/, '')
                let isCurrent = false;
                if (navPath === '/admin' && normalizedPath === '/admin') isCurrent = true;
                if (navPath !== '/admin' && normalizedPath.startsWith(navPath)) {
                  if (item.href.includes('type=')) {
                    isCurrent = typeof window !== 'undefined' && window.location.search.includes(item.href.split('?')[1]);
                  } else {
                    isCurrent = true;
                  }
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                      isCurrent ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <item.icon className={`mr-4 ml-3 flex-shrink-0 h-6 w-6 ${isCurrent ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-300'}`} />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-slate-800 p-4">
            <button onClick={handleLogout} className="flex-shrink-0 group block w-full flex items-center text-slate-300 hover:text-white cursor-pointer">
              <LogOut className="inline-block h-5 w-5 ml-3" />
              <div className="ml-3">
                <p className="text-sm font-medium">تسجيل الخروج</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0 bg-slate-900">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-white text-2xl font-bold">سيسي ترافل</span>
              </div>
              <nav className="mt-8 flex-1 px-2 bg-slate-900 space-y-1">
                {navigation.map((item) => {
                  const navPath = item.href.split('?')[0].replace(/\/$/, '')
                  let isCurrent = false;
                  if (navPath === '/admin' && normalizedPath === '/admin') isCurrent = true;
                  if (navPath !== '/admin' && normalizedPath.startsWith(navPath)) {
                    if (item.href.includes('type=')) {
                      isCurrent = typeof window !== 'undefined' && window.location.search.includes(item.href.split('?')[1]);
                    } else {
                      isCurrent = true;
                    }
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                        isCurrent ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <item.icon className={`mr-3 ml-3 flex-shrink-0 h-5 w-5 ${isCurrent ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-300'}`} />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-slate-800 p-4">
              <button onClick={handleLogout} className="flex-shrink-0 w-full group block text-right text-slate-300 hover:text-white transition-colors cursor-pointer">
                <div className="flex items-center">
                  <LogOut className="inline-block h-5 w-5 ml-3" />
                  <p className="text-sm font-medium">تسجيل الخروج</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white border-b border-gray-200">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">فتح القائمة</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <ReactQueryProvider>
                <Toaster position="top-center" />
                {children}
              </ReactQueryProvider>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

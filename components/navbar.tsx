import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Matex" />
              <span className="ml-2 text-2xl font-bold text-orange-600">Matex</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-600">
                Features
              </Link>
              <Link href="/pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-600">
                Pricing
              </Link>
              <Link href="/docs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-600">
                Docs
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button asChild variant="ghost" className="text-gray-900 hover:text-orange-600">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="ml-3 bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
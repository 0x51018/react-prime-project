import { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col">
      <header className="bg-white bg-opacity-10 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Prime Factorization</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        {children}
      </main>
      <footer className="bg-white bg-opacity-10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 text-center text-white text-sm">
          © 2023 Prime Factorization Tool. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


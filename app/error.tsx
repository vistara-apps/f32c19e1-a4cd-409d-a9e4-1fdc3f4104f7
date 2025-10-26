'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-surface rounded-xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="text-danger" size={32} />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-fg">Something went wrong!</h2>
          <p className="text-muted">
            We encountered an error while loading the application.
          </p>
        </div>

        <button
          onClick={reset}
          className="w-full py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

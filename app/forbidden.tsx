import Link from "next/link"

export default function Forbidden() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Access Forbidden</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        You don't have permission to access this page. Please contact us if you believe this is an error.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        Return to Home
      </Link>
    </div>
  )
}


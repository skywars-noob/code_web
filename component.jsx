/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GY5xxedSgbB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 md:px-6">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-50">Vercel UI</h1>
          <p className="text-lg text-gray-400">
            A collection of beautifully designed components that you can copy and paste into your apps.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            View on GitHub
          </Link>
        </div>
        <div className="bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <div className="prose dark:prose-invert">
            <h2>About the Project</h2>
            <p>
              Vercel UI is a collection of beautifully designed components that you can copy and paste into your apps.
              It's built using Tailwind CSS and the shadcn component library.
            </p>
            <p>Lorem ipsum</p>
          </div>
          <div className="bg-gray-950 rounded-lg p-4 overflow-auto">
            <pre className="text-sm font-mono text-gray-50">
              {`import { Button } from 'vercel-ui'
          
          function MyApp() {
            return (
              <div>
                <Button>Click me</Button>
              </div>
            )
          }`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  )
}

import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
      <div className="flex flex-col h-screen">
        <header className="relative z-10">
          <div className="container flex items-center justify-between px-4 md:px-6 py-4 md:py-6">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl">Quiz App</h1>
          </div>
        </header>
        <main className="flex-1 my-6">
          <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold">Choose a Theme</h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">Select a category to start the quiz</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              <Link
                  className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="/choose-your-difficulty"
              >
                <MusicIcon className="w-6 h-6"/>
                <div className="text-sm font-medium">Music</div>
              </Link>
              <Link
                  className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="/choose-your-difficulty"
              >
                <MicroscopeIcon className="w-6 h-6"/>
                <div className="text-sm font-medium">Science</div>
              </Link>
              <Link
                  className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="/choose-your-difficulty"
              >
                <HistoryIcon className="w-6 h-6"/>
                <div className="text-sm font-medium">History</div>
              </Link>
              <Link
                  className="flex items-center justify-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm gap-2 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="/choose-your-difficulty"
              >
                <ClubIcon className="w-6 h-6"/>
                <div className="text-sm font-medium">Sports</div>
              </Link>
            </div>
          </div>
        </main>
      </div>
  )
}

function ClubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"/>
        <path d="M12 17.66L12 22"/>
      </svg>
  )
}


function HistoryIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
        <path d="M12 7v5l4 2"/>
      </svg>
  )
}


function MicroscopeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M6 18h8"/>
        <path d="M3 22h18"/>
        <path d="M14 22a7 7 0 1 0 0-14h-1"/>
        <path d="M9 14h2"/>
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
      </svg>
  )
}


function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
  )
}

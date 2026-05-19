import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Profile Privacy Checker — Are Your Coding Profiles Public?',
  description: 'Scan GitHub, GitLab, LeetCode and more to detect if your private coding profiles have accidentally become public.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e6cfe14f-3ba1-4f4e-a6f7-c484fbec39d6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}

import './globals.css'
import { generateMetadata as generateSEOMetadata, jsonLdData } from '@/lib/seo'

export const metadata = generateSEOMetadata()

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

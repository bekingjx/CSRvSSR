import './globals.scss'
import { Inter } from 'next/font/google'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='first-app'>
        <div className='navigation'>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/csr"}>CSR</Link>
          <Link href={"/ssr"}>SSR</Link>
          <Link href={"/ssg"}>SSG</Link>
        </div>
        <div className="wrapper">
          {children}
        </div>
        
        </body>
    </html>
  )
}

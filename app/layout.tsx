import './globals.scss'
import Header from './templates/header'
import Footer from './templates/footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,}: {children: React.ReactNode}) {
  return (
    <html lang="it">
      <body className='first-app'>
        <Header/>
        <div className="wrapper">
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}

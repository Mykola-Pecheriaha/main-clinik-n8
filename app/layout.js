import localFont from 'next/font/local'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import ContactsBar from './components/ContactsBar/ContactsBar'
import Footer from './components/Footer/Footer'

const inter = Inter({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
})

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'Main clinik ',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.class} ${poppins.class} ${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="headerContainer">
          <ContactsBar />
          <Header />
        </div>
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

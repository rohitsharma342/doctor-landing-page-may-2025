import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Pulse & Posture - Physiotherapy Clinic',
  description: 'Professional physiotherapy services for pain relief, injury recovery, and improved mobility.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}

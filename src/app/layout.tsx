import { primaryFont } from '@settings/fonts'
import '@styles/index.scss'
import Header from '@common/Header/Header'
import Footer from '@common/Footer/Footer'
import TanStackProvider from '@providers/TanStackProvider'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <TanStackProvider>
          <div className="wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </TanStackProvider>
      </body>
    </html>
  )
}

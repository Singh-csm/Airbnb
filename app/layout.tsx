import {Nunito} from "next/font/google";
import './globals.css'
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb next app',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title="Hello" isOpen/>
          <Navbar/>
        </ClientOnly>
        {children}</body>
    </html>
  )
}

import "./globals.css"
import { ppEditorialNewUltralightItalic, inter, poppins, leagueSpartan, spaceGrotesk } from "./fonts"
import type React from "react"

export const metadata = {
  title: "Eddy Rodriguez | Product Manager",
  description: "Fintech operator and entrepreneur based in Miami",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable} ${poppins.variable} ${leagueSpartan.variable} ${spaceGrotesk.variable}`}
    >
      <body className={`${inter.className} font-body`}>{children}</body>
    </html>
  )
}

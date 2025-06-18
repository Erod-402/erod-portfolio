import { Inter } from "next/font/google"
import { Poppins } from "next/font/google"
import { League_Spartan } from "next/font/google"
import { Space_Grotesk } from "next/font/google"
import type { NextFontWithVariable } from "next/dist/compiled/@next/font"
import type { NextFont } from "next/font"

const ppEditorialNewUltralightItalic: NextFontWithVariable & NextFont = {
  className: "font-pp-editorial",
  style: {
    fontFamily: "PPEditorialNew-UltralightItalic",
    fontWeight: "200",
    fontStyle: "italic",
  },
  variable: "--font-pp-editorial",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-league-spartan",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export { ppEditorialNewUltralightItalic, inter, poppins, leagueSpartan, spaceGrotesk }

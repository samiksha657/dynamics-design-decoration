import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Newsreader({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"], weight: ["300", "400", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: {
    default: "Dynamics Design & Decoration — Turnkey fit-out, MEP & maintenance in the UAE",
    template: "%s | Dynamics Design & Decoration",
  },
  description:
    "Turnkey fit-out, MEP, civil, acoustic treatment, interiors and maintenance across Dubai, Abu Dhabi and the Northern Emirates. One team. One contract.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

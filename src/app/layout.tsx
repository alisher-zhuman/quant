import "./globals.css";
import { ReactNode } from "react";
import { Rubik } from "next/font/google";
import { METADATA } from "@/shared/utils/constants";
const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata = METADATA;

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="ru" className={rubik.variable}>
    <body className="font-sans">{children}</body>
  </html>
);

export default RootLayout;

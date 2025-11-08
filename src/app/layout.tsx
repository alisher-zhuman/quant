import { ReactNode } from "react";
import { Rubik } from "next/font/google";
import { METADATA } from "@/utils/constants";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata = METADATA;

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang="ru" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

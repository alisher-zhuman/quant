"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/molecules/navbar";
import { AdviceButton } from "@/atoms/advice-button";

export const Header = () => {
  return (
    <header className="py-4 px-2 lgx:px-10 flex items-center justify-between sticky top-0 bg-white">
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          alt="Логотип"
          loading="eager"
          width={64}
          height={64}
        />
      </Link>

      <div className="flex items-center gap-4 lg:gap-3">
        <Navbar />

        <AdviceButton onClick={() => console.log("Hi")} />

        <Image
          className="lg:hidden"
          src="/icons/burger.svg"
          alt="Меню"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/molecules/navbar";
import { AdviceButton } from "@/atoms/advice-button";
import { cn } from "@/utils/helpers";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-2 lgx:px-10 flex items-center justify-between sticky top-0 bg-white z-50">
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

        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <Image src="/icons/burger.svg" alt="Меню" width={24} height={24} />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 right-0 w-3/5 max-w-sm h-full bg-white z-50 flex flex-col p-4 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Закрыть меню"
            className={cn(
              "transition-transform duration-300 cursor-pointer",
              isMenuOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"
            )}
          >
            <Image
              src="/icons/close.svg"
              alt="Закрыть"
              width={24}
              height={24}
            />
          </button>
        </div>

        <AdviceButton className="mt-2" onClick={() => console.log("Hi")} />

        <Navbar />
      </div>
    </header>
  );
};

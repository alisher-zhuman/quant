"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Navbar } from "@/molecules/navbar";
import { ConsultationForm } from "@/molecules/consultation-form";
import { Button } from "@/atoms/button";
import { Modal } from "@/atoms/modal";
import { cn } from "@/utils/helpers";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const t = useTranslations();

  return (
    <>
      <header className="max-w-[1600px] m-auto py-4 pl-4.5 lgx:pl-9.5 pr-5 lgx:pr-10 flex items-center justify-between sticky top-0 bg-white z-50">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Логотип"
            loading="eager"
            width={64}
            height={64}
          />
        </Link>

        <div className="flex items-center gap-1 sm:gap-4 lg:gap-3">
          <Navbar />

          <Button className="text-sm sm:text-base" onClick={toggleModal}>
            {t("Получить консультацию")}
          </Button>

          <Image
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden cursor-pointer"
            src="/icons/burger.svg"
            alt="Меню"
            width={24}
            height={24}
          />
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
            "fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 flex flex-col p-2 transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end">
            <Image
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer"
              src="/icons/close.svg"
              alt="Закрыть"
              width={24}
              height={24}
            />
          </div>

          <Button className="mt-2" onClick={toggleModal}>
            {t("Получить консультацию")}
          </Button>

          <Navbar mobile closeMenu={() => setIsMenuOpen(false)} />
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ConsultationForm toggleModal={toggleModal} />
      </Modal>
    </>
  );
};

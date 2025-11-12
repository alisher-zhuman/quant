"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/atoms/button";
import { Modal } from "@/atoms/modal";
import { FormModal } from "@/molecules/form-modal";

export const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations();

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <section className="px-5 lgx:px-10 bg-[url('/images/intro.png')] bg-cover bg-center h-[90vh] flex flex-col md:items-center md:justify-center">
        <h1 className="font-semibold text-3xl md:text-5xl text-center text-white mt-20 md:mt-0 md:w-[686px]">
          {t("Интеллектуальный счетчик воды “КВАНТ”")}
        </h1>

        <p className="text-white text-center mt-4">
          {t("Автоматический сбор показаний для вашего дома и бизнеса")}
        </p>

        <Button
          className="mt-10 py-3.5 px-2 w-full md:w-fit md:py-4.5 md:px-6.5"
          onClick={toggleModal}
        >
          {t("Получить консультацию")}
        </Button>
      </section>

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <FormModal toggleModal={toggleModal}/>
      </Modal>
    </>
  );
};

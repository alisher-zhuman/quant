"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/atoms/button";
import { Modal } from "@/atoms/modal";
import { FormModal } from "@/molecules/form-modal";

export const Intro = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const t = useTranslations();

  const toggleFormModal = () => setIsFormOpen((prev) => !prev);

  const toggleVideoModal = () => setIsVideoOpen((prev) => !prev);

  return (
    <>
      <section className="px-5 lgx:px-10 bg-[url('/images/intro.png')] bg-cover bg-center h-[90vh] flex flex-col md:items-center md:justify-center">
        <h1 className="font-semibold text-3xl md:text-5xl text-center text-white mt-20 md:mt-0 md:w-[686px]">
          {t("Интеллектуальный счетчик воды “КВАНТ”")}
        </h1>

        <p className="text-white text-center mt-4">
          {t("Автоматический сбор показаний для вашего дома и бизнеса")}
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-3 md:gap-4">
          <Button
            className="py-3.5 px-2 w-full md:w-fit md:py-4.5 md:px-6.5"
            onClick={toggleFormModal}
          >
            {t("Получить консультацию")}
          </Button>

          <Button
            className="flex items-center justify-center gap-2 py-3.5 px-2 w-full md:w-fit md:py-4.5 md:px-6.5 bg-white text-[#101828] hover:bg-gray-100"
            onClick={toggleVideoModal}
          >
            <Image
              src="/icons/play.svg"
              alt={t("Смотреть видео")}
              width={14}
              height={15}
            />
            {t("Смотреть видео")}
          </Button>
        </div>
      </section>

      <Modal isOpen={isFormOpen} onClose={toggleFormModal}>
        <FormModal toggleModal={toggleFormModal} />
      </Modal>

      <Modal isOpen={isVideoOpen} onClose={toggleVideoModal}>
        <div className="w-full h-full flex justify-center items-center">
          <video
            src="/videos/intro.mp4"
            controls
            autoPlay
            className="w-full max-w-3xl rounded-lg"
          />
        </div>
      </Modal>
    </>
  );
};

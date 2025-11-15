"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ConsultationForm } from "@/molecules/consultation-form";
import { Button } from "@/atoms/button";
import { Modal } from "@/atoms/modal";
import { cn } from "@/utils/helpers";
import { HOW_IT_WORKS } from "@/utils/constants";

const HowItWorks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <section className="px-5 lgx:px-10 my-20 md:my-32 max-w-[1600px] m-auto">
        <h1 className="text-2xl md:text-3xl font-medium text-center">
          {t("Как это работает")}
        </h1>

        <div className="mt-4 md:mt-8 flex flex-wrap items-stretch justify-between gap-3 md:gap-5">
          {HOW_IT_WORKS.map(({ title, icon, description }, i) => (
            <div
              key={i}
              className={cn(
                "p-4 md:p-6 border border-[#E4E7EC] rounded-3xl w-[440px] flex flex-col justify-start",
                icon ||
                  "justify-start items-start md:items-center md:justify-center "
              )}
            >
              {icon && (
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              )}

              <p className="font-medium text-base md:text-xl mt-2 md:mt-6">
                {t(title)}
              </p>

              <p className="text-[#101828B2] mt-1 text-sm md:text-base md:mt-2">
                {t(description)}
              </p>

              {!icon && (
                <Button
                  className="mt-4 w-full md:w-[60%]"
                  onClick={toggleModal}
                >
                  {t("Получить консультацию")}
                </Button>
              )}
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <ConsultationForm toggleModal={toggleModal} />
      </Modal>
    </>
  );
};

export default HowItWorks;

import Image from "next/image";
import { useTranslations } from "next-intl";
import { EQUIPMENTS } from "@/utils/constants";
import { cn } from "@/utils/helpers";

const Equipment = () => {
  const t = useTranslations();

  return (
    <section className="my-20 md:my-32">
      <h1 className="text-2xl md:text-3xl font-medium px-5 lgx:px-10">
        {t("Оборудование")}
      </h1>

      <div className="mt-4 md:mt-8">
        <div className="md:px-10 flex gap-5 overflow-x-auto md:overflow-x-visible md:flex-wrap scroll-smooth snap-x snap-mandatory">
          {EQUIPMENTS.map(({ name, image, certificate, instruction }, i) => (
            <div
              key={i}
              className={cn(
                "w-56 md:w-80 shrink-0",
                i === 0 && "ml-5",
                i === EQUIPMENTS.length - 1 && "mr-5"
              )}
            >
              <div className="bg-[#F2F4F7] rounded-2xl flex items-center justify-center">
                <Image src={image} alt={name} width={325} height={325} />
              </div>

              <p
                className="mt-2 md:mt-4 text-base md:text-lg font-medium truncate"
                title={t(name)}
              >
                {t(name)}
              </p>

              <div className="mt-4 md:mt-7 flex flex-col gap-2 md:flex-row items-center justify-between">
                <a
                  className="flex items-center justify-center text-sm md:text-base gap-1 bg-[#F2F4F7] py-3 px-4 rounded-xl cursor-pointer w-full"
                  href={certificate}
                  download
                >
                  <Image
                    src="/icons/pdf.svg"
                    className="w-5 h-5 md:w-6 md:h-6"
                    alt={t("Сертификат")}
                    width={24}
                    height={24}
                  />
                  {t("Сертификат")}
                </a>

                <a
                  className="flex items-center justify-center text-sm md:text-base gap-1 bg-[#F2F4F7] py-3 px-4 rounded-xl cursor-pointer w-full"
                  href={instruction}
                  download
                >
                  <Image
                    src="/icons/pdf.svg"
                    className="w-5 h-5 md:w-6 md:h-6"
                    alt={t("Инструкции")}
                    width={24}
                    height={24}
                  />
                  {t("Инструкции")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;

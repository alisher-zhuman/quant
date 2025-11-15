import Image from "next/image";
import { useTranslations } from "next-intl";
import { ConsultationForm } from "@/molecules/consultation-form";

const Consultation = () => {
  const t = useTranslations();

  return (
    <section className="px-5 lgx:px-10 my-20 md:my-32 max-w-[1600px] m-auto">
      <div className="rounded-4xl md:border border-[#E4E7EC] md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h1 className="text-xl md:text-3xl font-medium">
            {t("Хотите протестировать “КВАНТ” на вашем объекте?")}
          </h1>

          <ul className="mt-3 md:mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <Image
                src="/icons/checked.svg"
                alt="checked"
                width={20}
                height={20}
              />

              {t("Консультация и расчет экономического эффекта бесплатно")}
            </li>

            <li className="flex items-center gap-2">
              <Image
                src="/icons/checked.svg"
                alt="checked"
                width={20}
                height={20}
              />

              {t("Коммерческое предложение под ваш объект")}
            </li>

            <li className="flex items-center gap-2">
              <Image
                src="/icons/checked.svg"
                alt="checked"
                width={20}
                height={20}
              />

              {t("Пилотная установка 1–2 приборов для теста")}
            </li>
          </ul>
        </div>

        <ConsultationForm titleIsVisible={false} />
      </div>
    </section>
  );
};

export default Consultation;

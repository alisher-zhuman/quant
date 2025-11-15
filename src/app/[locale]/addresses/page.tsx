"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Addresses = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <section className="max-w-[1600px] m-auto pl-3.5 pr-2 mt-2 md:mt-5 lgx:pr-10 lgx:pl-12 mb-20">
      <button onClick={() => router.back()} className="cursor-pointer mb-3">
        ← {t("Назад")}
      </button>

      <h1 className="text-xl md:text-3xl font-semibold mb-4">
        {t("Где купить")}
      </h1>

      <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
        <div className="flex-1">
          <iframe
            className="w-full rounded-2xl h-[200px] md:h-[400px] md:flex-1"
            src="https://yandex.com/map-widget/v1/?um=constructor%3Ac2798270c5348d6f3d455ec4cf2ecc2793d88a510382848a27a3ca1aed587771&amp;source=constructor"
          />

          <p className="font-semibold mt-2 md:text-center">
            {t("г_Бишкек_ТЦ_БУМ_ЗАПАД_бутик_Д20_4_этаж")}
          </p>

          <p className="text-[#101828B2] md:text-center">
            {t("Ежедневно с 09:00 до 18:00")}
          </p>
        </div>

        <div className="flex-1">
          <iframe
            className="w-full rounded-2xl h-[200px] md:h-[400px] md:flex-1"
            src="https://yandex.com/map-widget/v1/?um=constructor%3Abb77adb435417964d6097c87a1a6fea2684b76d20302aaa00bfbe5b9f8b4d22a&amp;source=constructor"
          />

          <p className="font-semibold mt-2 md:text-center">
            {t("г_Манас_ТЦ_Келечек_ул_Байзакова_10_55А")}
          </p>

          <p className="text-[#101828B2] md:text-center">
            {t("Ежедневно с 09:00 до 18:00")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Addresses;

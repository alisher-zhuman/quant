import Image from "next/image";
import { useTranslations } from "next-intl";
import { WHY_US } from "@/utils/constants";

const WhyUs = () => {
  const t = useTranslations();

  return (
    <section className="px-5 lgx:px-10 my-20 md:my-32">
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        {t("Почему именно мы")}
      </h1>

      <div className="mt-4 md:mt-8 flex flex-wrap items-stretch justify-center gap-3 md:gap-5">
        {WHY_US.map(({ title, icon, descriptionKey }, i) => (
          <div
            key={i}
            className="p-4 md:p-6 border border-[#E4E7EC] rounded-3xl w-[670px] flex flex-col"
          >
            <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="h-6 w-6 md:h-8 md:w-8"
            />

            <p className="font-medium text-base md:text-xl mt-2 md:mt-6">
              {t(title)}
            </p>

            <p className="text-[#101828B2] mt-1 text-sm md:text-base md:mt-2 grow">
              {t(descriptionKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

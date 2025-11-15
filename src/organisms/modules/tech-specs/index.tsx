import { useTranslations } from "next-intl";
import { TECH_SPECS } from "@/utils/constants";

const TechSpecs = () => {
  const t = useTranslations();

  return (
    <section className="px-5 lgx:px-10 my-20 md:my-32">
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        {t("Технические характеристики")}
      </h1>

      <div className="mt-4 md:mt-8 flex flex-wrap items-stretch justify-between gap-3 md:gap-5">
        {TECH_SPECS.map(({ title, badge, description }, i) => (
          <div
            key={i}
            className="p-4 md:p-6 border border-[#E4E7EC] rounded-3xl w-[440px] flex flex-col"
          >
            <p className="bg-[#1570EF1A] text-[#1570EF] text-sm font-medium w-fit rounded-lg py-1 px-2 md:py-1.5 md:px-2.5">
              {t(badge)}
            </p>

            <p className="font-medium text-base md:text-xl mt-2.5 md:mt-3">
              {t(title)}
            </p>

            <p className="text-[#101828B2] mt-1 text-sm md:text-base md:mt-2 grow">
              {t(description)}
            </p>
          </div>
        ))}
      </div> 
    </section>
  );
};

export default TechSpecs;

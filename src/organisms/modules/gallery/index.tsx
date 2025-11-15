import { useTranslations } from "next-intl";
import { VIDEOS } from "@/utils/constants";

const Gallery = () => {
  const t = useTranslations();

  return (
    <section className="px-5 lgx:px-10 my-20 md:my-32">
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        {t("Видеогалерея")}
      </h1>

      <div className="mt-4 md:mt-8 flex flex-wrap justify-between items-start gap-3 md:gap-5">
        {VIDEOS.map(({ src, text }, i) => (
          <div key={i} className="w-80 flex flex-col">
            <video
              src={src}
              controls
              className="rounded-2xl w-full h-44.5 object-cover"
            />

            <p className="mt-2 md:mt-3">
              {t(text)} {i + 1}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

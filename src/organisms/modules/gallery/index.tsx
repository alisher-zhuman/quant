import { useTranslations } from "next-intl";
import { VIDEOS } from "@/utils/constants";
import { cn } from "@/utils/helpers";

const Gallery = () => {
  const t = useTranslations();

  return (
    <section className="my-20 lgx:px-10 md:my-32 max-w-[1600px] m-auto">
      <h1 className="text-2xl px-5 lgx:px-10 md:text-3xl font-medium text-center">
        {t("Видеогалерея")}
      </h1>

      <div className="mt-4 md:mt-8">
        <div className="flex items-center md:justify-center gap-3 md:gap-5 overflow-x-auto md:overflow-x-visible scroll-smooth snap-x snap-mandatory md:flex-wrap">
          {VIDEOS.map(({ src, text }, i) => (
            <div
              key={i}
              className={cn(
                "w-80 shrink-0 flex flex-col",
                i === 0 && "ml-5 md:ml-0",
                i === VIDEOS.length - 1 && "mr-5 md:mr-0"
              )}
            >
              <video
                src={src}
                controls
                className="rounded-2xl w-full h-44.5 object-cover"
              />

              <p className="mt-2 md:mt-3 text-center">
                {t(text)} {i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

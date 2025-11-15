import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations();

  return (
    <>
      <hr className="border-[#E4E7EC]" />

      <footer className="max-w-[1600px] m-auto px-5 lgx:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Логотип"
            loading="eager"
            width={64}
            height={64}
          />
        </Link>

        <nav>
          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <li className="w-fit">
              <Link
                href="https://go.2gis.com/EBA1n"
                className="flex items-center gap-2"
              >
                <Image
                  src="/icons/location.svg"
                  alt="Адрес"
                  width={24}
                  height={24}
                />

                {t("address_bishkek")}
              </Link>
            </li>

            <li className="flex items-center gap-2 w-fit">
              <Image
                src="/icons/clock.svg"
                alt="Часы работы"
                width={24}
                height={24}
              />

              {t("work_hours")}
            </li>

            <li className="w-fit">
              <Link
                href="https://wa.me/996997111888"
                className="flex items-center gap-2"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="Ватсап"
                  width={24}
                  height={24}
                />
                +996 997 111 888
              </Link>
            </li>

            <li className="w-fit">
              <Link
                className="flex items-center gap-2"
                href="https://www.instagram.com/kvant.kg/"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Инстаграм"
                  width={24}
                  height={24}
                />
                @kvant.kg
              </Link>
            </li>

            <li className="w-fit">
              <Link
                className="flex items-center gap-2"
                href="https://www.facebook.com/profile.php?id=61576391347912"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Фэйсбук"
                  width={24}
                  height={24}
                />
                Kvant KG
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

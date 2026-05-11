import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/shared/constants";

const PUBLIC_PATHS = ["", "/documents", "/addresses"];

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date();

  return routing.locales.flatMap((locale) => {
    const languageAlternates = Object.fromEntries(
      routing.locales.map((lang) => [lang, `${SITE_URL}/${lang}`]),
    );

    return PUBLIC_PATHS.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates).map(([lang, baseUrl]) => [
            lang,
            `${baseUrl}${path}`,
          ]),
        ),
      },
    }));
  });
};

export default sitemap;

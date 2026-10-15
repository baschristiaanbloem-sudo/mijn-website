import type { MetadataRoute } from "next";
import { enPaths, nlPaths, type AppRoute } from "@/lib/routes";
import { siteUrl } from "@/lib/site";

const routePriority: Record<AppRoute, { changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>; priority: number }> = {
  home: { changeFrequency: "weekly", priority: 1 },
  praktijk: { changeFrequency: "monthly", priority: 0.8 },
  team: { changeFrequency: "monthly", priority: 0.8 },
  nieuwInAmstelveen: { changeFrequency: "monthly", priority: 0.8 },
  gpAmstelveen: { changeFrequency: "monthly", priority: 0.9 },
  contact: { changeFrequency: "monthly", priority: 0.9 },
  inschrijving: { changeFrequency: "weekly", priority: 0.9 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = Object.keys(routePriority) as AppRoute[];
  const urls = new Set<string>();

  for (const route of routes) {
    urls.add(nlPaths[route]);
    urls.add(enPaths[route]);
  }

  return [...urls].map((path) => {
    const route =
      (Object.entries(enPaths).find(([, value]) => value === path)?.[0] as AppRoute | undefined) ??
      (Object.entries(nlPaths).find(([, value]) => value === path)?.[0] as AppRoute | undefined) ??
      "home";
    const meta = routePriority[route];

    return {
      url: new URL(path, siteUrl).toString(),
      lastModified,
      changeFrequency: meta.changeFrequency,
      priority: path.startsWith("/en") ? meta.priority : meta.priority,
    };
  });
}

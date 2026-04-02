import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adryel Web Studio",
    short_name: "Adryel Web",
    description:
      "Landing pages e sites institucionais com foco em performance e conversao.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe4",
    theme_color: "#d9461f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

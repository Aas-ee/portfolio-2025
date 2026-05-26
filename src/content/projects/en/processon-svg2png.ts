import processOnPreview from "../../../assets/thumbnails/processon-svg2png.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "ProcessOn SVG2PNG",
  theme: "light",
  tags: ["javascript", "tampermonkey", "browser-script", "svg", "canvas"],
  videoBorder: false,
  source: "https://github.com/Aas-ee/processon-svg2png",
  description:
    "ProcessOn SVG2PNG is a lightweight Tampermonkey browser script for exporting ProcessOn flowchart and mind-map SVG content as PNG files.<br/><br/>It is a small side project focused on practical workflow efficiency.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: processOnPreview,
        alt: "ProcessOn SVG to PNG helper",
        caption: "Browser helper for ProcessOn exports",
      },
    },
    {
      type: "list",
      props: {
        title: "Scope",
        items: [
          "Runs as a Tampermonkey browser script",
          "Assists SVG extraction and PNG download",
          "Uses browser-side SVG and Canvas APIs",
          "Positioned as a side project / small utility",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

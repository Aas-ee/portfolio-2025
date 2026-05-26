import processOnPreview from "../../../assets/thumbnails/processon-svg2png.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "ProcessOn SVG2PNG",
  theme: "light",
  tags: ["javascript", "tampermonkey", "browser-script", "svg", "canvas"],
  videoBorder: false,
  source: "https://github.com/Aas-ee/processon-svg2png",
  description:
    "ProcessOn SVG2PNG 是一个 Tampermonkey 浏览器脚本，用于辅助 ProcessOn 流程图 / 思维导图 SVG 转 PNG 下载。<br/><br/>这是一个偏效率工具的小项目，解决实际工作流里的图片导出问题。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: processOnPreview,
        alt: "ProcessOn SVG 转 PNG 辅助器",
        caption: "ProcessOn SVG 转 PNG 浏览器辅助工具",
      },
    },
    {
      type: "list",
      props: {
        title: "范围",
        items: [
          "以 Tampermonkey 浏览器脚本方式运行",
          "辅助 SVG 提取和 PNG 下载",
          "使用浏览器侧 SVG 与 Canvas API",
          "定位为 Side Project / 小工具",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

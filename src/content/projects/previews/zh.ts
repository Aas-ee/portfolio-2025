import thumbnailOpenWebSearch from "../../../assets/thumbnails/open-websearch.png";
import thumbnailMusio from "../../../assets/thumbnails/musio.png";
import thumbnailResumeSkills from "../../../assets/thumbnails/resume-skills.svg";
import thumbnailProcessOnSvg2Png from "../../../assets/thumbnails/processon-svg2png.svg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Open-WebSearch",
    slug: "open-websearch",
    thumbnail: thumbnailOpenWebSearch,
    description: "面向 Agent / MCP 场景的 Web 搜索与网页抓取工具",
  },
  {
    title: "Musio",
    slug: "musio",
    thumbnail: thumbnailMusio,
    description: "本地优先的自主型音乐 Agent",
  },
  {
    title: "Resume-Skills",
    slug: "resume-skills",
    thumbnail: thumbnailResumeSkills,
    description: "面向多 Agent Host 的简历生成 Runtime",
  },
  {
    title: "ProcessOn SVG2PNG",
    slug: "processon-svg2png",
    thumbnail: thumbnailProcessOnSvg2Png,
    description: "辅助 ProcessOn SVG 转 PNG 的浏览器脚本",
  },
] as const satisfies ProjectPreview[];

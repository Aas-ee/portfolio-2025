import openWebSearchDetail from "../../../assets/images/projects/open-websearch/open-websearch-detail.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Open-WebSearch",
  theme: "dark",
  tags: ["typescript", "node", "express", "mcp", "cli", "daemon"],
  videoBorder: false,
  source: "https://github.com/Aas-ee/open-webSearch",
  description:
    "Open-WebSearch is a multi-engine web search and content fetching tool for agents.<br/><br/>It provides an MCP Server, CLI, local daemon, and skill-guided workflows, with no-API-key search, proxy configuration, structured result output, web page extraction, and a long-running local HTTP service.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: openWebSearchDetail,
        alt: "Open-WebSearch MCP Server",
        caption: "MCP-ready web search and content fetching",
      },
    },
    {
      type: "text",
      props: {
        title: "Agent-ready retrieval",
        text: "The project wraps search, page fetching, proxy configuration, structured outputs, daemon mode, and health checks behind interfaces that can be called by agents, CLIs, and local automation workflows.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "MCP Server, CLI, and local daemon entry points",
          "Bing, DuckDuckGo, Brave, Startpage, CSDN, and Juejin support",
          "1.3k+ GitHub stars, 6k+ weekly npm downloads, and 120k+ total downloads",
          "Referenced by Microsoft Azure official documentation",
          "Search sources: Bing, Baidu, CSDN, DuckDuckGo, Exa, Brave, Juejin, Startpage, and Sogou",
          "Content fetching: CSDN, GitHub README, and general HTTP(S) / Markdown pages",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

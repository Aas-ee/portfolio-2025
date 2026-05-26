import openWebSearchDetail from "../../../assets/images/projects/open-websearch/open-websearch-detail.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Open-WebSearch",
  theme: "dark",
  tags: ["typescript", "node", "express", "mcp", "cli", "daemon"],
  videoBorder: false,
  source: "https://github.com/Aas-ee/open-webSearch",
  description:
    "Open-WebSearch 是一个面向 Agent 的多引擎 Web 搜索与内容抓取工具。<br/><br/>项目提供 MCP Server、CLI、本地 Daemon 和 Skill-guided workflows，支持免 API Key 搜索、代理配置、结构化结果返回、网页正文抓取和本地长驻 HTTP 服务。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: openWebSearchDetail,
        alt: "Open-WebSearch MCP Server",
        caption: "面向 MCP 与 Agent 的搜索和网页抓取能力",
      },
    },
    {
      type: "text",
      props: {
        title: "Agent 可直接使用的检索工具",
        text: "项目把搜索、网页正文抓取、代理配置、结构化结果、长驻 daemon 和健康检查封装成 Agent、CLI 与本地自动化工作流可以稳定调用的能力。",
      },
    },
    {
      type: "list",
      props: {
        title: "项目亮点",
        items: [
          "同时支持 MCP Server、CLI 与本地 Daemon",
          "接入 Bing、DuckDuckGo、Brave、Startpage、CSDN 与掘金等来源",
          "已获得 1.3k+ GitHub Stars、npm 周下载量 6k+、累计下载量 12 万+",
          "被微软 Azure 官方文档收录",
          "搜索源：Bing、Baidu、CSDN、DuckDuckGo、Exa、Brave、Juejin、Startpage、Sogou",
          "内容抓取：CSDN、GitHub README、通用 HTTP(S) 页面 / Markdown",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

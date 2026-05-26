import musioDetail from "../../../assets/images/projects/musio/musio-detail.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Musio",
  theme: "dark",
  tags: ["java", "spring", "ai", "react", "typescript", "fastapi", "sqlite"],
  videoBorder: false,
  live: "https://musio.aasee.com.cn",
  source: "https://github.com/mindforge-x/musio",
  description:
    "Musio 是一个本地优先的 AI 音乐 Agent，会在本机启动音乐源适配器、Spring Boot 后端、React Web 控制台和 Java CLI 启动器。<br/><br/>用户可以通过网页或命令行连接 QQ 音乐、搜索歌曲、播放音乐、查看歌词 / 评论，并让 Agent 基于本地记忆和音乐源能力完成推荐、歌单和对话任务。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: musioDetail,
        alt: "Musio 自主型音乐 Agent",
        caption: "本地优先的自主型音乐 Agent",
      },
    },
    {
      type: "text",
      props: {
        title: "本地运行时架构",
        text: "Musio 将 Java CLI、Spring Boot Agent Runtime、React 控制台和 Python 音乐源 sidecar 组合成一个本地优先的 Agent 工作流，支持搜索、播放、歌词 / 评论读取、推荐、歌单与多轮音乐任务。",
      },
    },
    {
      type: "list",
      props: {
        title: "核心能力",
        items: [
          "Goal 归一化、Step Planner、Capability Registry 与 Tool Executor",
          "基于 Observation Evidence 的 Plan + ReAct Loop",
          "面向用户偏好和任务上下文的动态记忆",
          "对写入类动作提供 Human-in-the-loop 安全确认",
          "安装方式：npm install -g @mindforge-x/musio，然后执行 musio",
          "当前优先支持 QQ 音乐，后续方向包括网易云音乐和本地音乐源",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

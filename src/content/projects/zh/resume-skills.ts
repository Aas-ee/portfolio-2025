import resumeSkillsPreview from "../../../assets/thumbnails/resume-skills.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Resume-Skills",
  theme: "dark",
  tags: ["python", "json-schema", "cli", "agent-skill", "markdown", "html", "css"],
  videoBorder: false,
  source: "https://github.com/Aas-ee/resume-skills",
  description:
    "Resume-Skills 是一个面向 Agent 的简历生成 Runtime，将简历采集、模板选择、结构化问答、渲染输出封装为可复用的 Skill 与 JSON CLI。<br/><br/>项目是一个隐私安全的公开 Runtime 快照，抽离了可复用的简历生成流程、模板协议、JSON CLI、Schema 合约和 Skill 工作流。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: resumeSkillsPreview,
        alt: "Resume-Skills Runtime 示意图",
        caption: "面向多 Agent Host 的简历生成 Runtime",
      },
    },
    {
      type: "text",
      props: {
        title: "Runtime 边界",
        text: "项目通过 agent_intake_cli、host_cli、render_cli、template_catalog_cli 等入口完成简历意图识别、材料解析、结构化信息采集、模板上下文生成和渲染输出，方便不同 Agent Host 复用同一套简历生成能力。",
      },
    },
    {
      type: "list",
      props: {
        title: "工作流",
        items: [
          "简历意图识别与材料解析",
          "结构化问答采集与 Schema 校验",
          "模板上下文生成",
          "Markdown / HTML / CSS 渲染输出",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

import resumeSkillsPreview from "../../../assets/thumbnails/resume-skills.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Resume-Skills",
  theme: "dark",
  tags: ["python", "json-schema", "cli", "agent-skill", "markdown", "html", "css"],
  videoBorder: false,
  source: "https://github.com/Aas-ee/resume-skills",
  description:
    "Resume-Skills is a reusable resume-generation runtime for agents, with structured intake, template selection, JSON CLIs, schemas, and rendering workflows.<br/><br/>It is a privacy-safe public snapshot that extracts the reusable resume generation process, template protocol, JSON CLI entrypoints, schema contracts, and skill workflows for different agent hosts.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: resumeSkillsPreview,
        alt: "Resume-Skills runtime diagram",
        caption: "Reusable resume-generation runtime for agent hosts",
      },
    },
    {
      type: "text",
      props: {
        title: "Runtime boundary",
        text: "The runtime provides agent_intake_cli, host_cli, render_cli, template_catalog_cli, and related schemas so different agent hosts can reuse the same resume generation flow without exposing private resume data in the public repository.",
      },
    },
    {
      type: "list",
      props: {
        title: "Workflow",
        items: [
          "Resume intent recognition and material parsing",
          "Structured question collection and schema validation",
          "Template context generation",
          "Markdown / HTML / CSS rendering bundles",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

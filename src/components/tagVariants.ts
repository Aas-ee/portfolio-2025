export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "python"
  | "node"
  | "express"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "mcp"
  | "cli"
  | "daemon"
  | "json-schema"
  | "agent-skill"
  | "markdown"
  | "tampermonkey"
  | "browser-script"
  | "svg"
  | "canvas"
  | "java"
  | "spring"
  | "ai"
  | "fastapi"
  | "sqlite"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  node: "Node.js",
  express: "Express",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  mcp: "MCP",
  cli: "CLI",
  daemon: "Daemon",
  "json-schema": "JSON Schema",
  "agent-skill": "Agent Skill",
  markdown: "Markdown",
  tampermonkey: "Tampermonkey",
  "browser-script": "Browser Script",
  svg: "SVG",
  canvas: "Canvas",
  java: "Java",
  spring: "Spring",
  ai: "AI Agent",
  fastapi: "FastAPI",
  sqlite: "SQLite",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;

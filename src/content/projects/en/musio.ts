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
    "Musio is a local-first AI music agent that starts music-source adapters, a Spring Boot backend, a React web console, and a Java CLI launcher on the user's machine.<br/><br/>Users can connect QQ Music, search songs, play music, view lyrics and comments, and let the agent complete recommendations, playlists, and conversational tasks through local memory and music-source capabilities.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: musioDetail,
        alt: "Musio autonomous music agent",
        caption: "Local-first autonomous music agent",
      },
    },
    {
      type: "text",
      props: {
        title: "Runtime architecture",
        text: "Musio connects a Java CLI, Spring Boot Agent Runtime, React control surface, and Python music-source sidecar into one local-first agent workflow for search, playback, lyrics, comments, recommendations, playlists, and multi-turn music tasks.",
      },
    },
    {
      type: "list",
      props: {
        title: "Core capabilities",
        items: [
          "Goal normalization, Step Planner, Capability Registry, and Tool Executor",
          "Plan + ReAct Loop based on observation evidence",
          "Dynamic memory for user preferences and task context",
          "Human-in-the-loop confirmation for safer write actions",
          "Install with npm install -g @mindforge-x/musio, then run musio",
          "Currently prioritizes QQ Music, with NetEase Cloud Music and local music sources planned",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

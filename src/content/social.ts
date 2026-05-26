export const social = [
  { url: "mailto:1600677504@qq.com", name: "mail" },
  { url: "https://github.com/Aas-ee", name: "github" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "platforms"
  | "ai";

export interface SkillEntry {
  label: string;
  category: SkillCategory;
  highlight?: boolean;
}

export const skillFilters: { id: SkillCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "database", label: "Database" },
  { id: "platforms", label: "Platforms & Tools" },
  { id: "ai", label: "AI & ML" },
];

export const skillList: SkillEntry[] = [
  // ── Languages ──
  { label: "TypeScript", category: "languages", highlight: true },
  { label: "JavaScript", category: "languages" },
  { label: "Python", category: "languages" },
  { label: "PHP", category: "languages" },
  { label: "Dart", category: "languages", highlight: true },
  { label: "SQL", category: "languages" },
  { label: "C#", category: "languages" },

  // ── Frontend ──
  { label: "React", category: "frontend", highlight: true },
  { label: "Next.js", category: "frontend", highlight: true },
  { label: "Vue.js", category: "frontend", highlight: true },
  { label: "Tailwind CSS", category: "frontend" },
  { label: "Bootstrap", category: "frontend" },
  { label: "Styled Components", category: "frontend" },
  { label: "Framer Motion", category: "frontend" },
  { label: "Vite", category: "frontend", highlight: true },
  { label: "Prettier", category: "frontend" },

  // ── Backend ──
  { label: "Node.js", category: "backend", highlight: true },
  { label: "Express.js", category: "backend", highlight: true },
  { label: "NestJS", category: "backend", highlight: true },
  { label: "FastAPI", category: "backend", highlight: true },
  { label: "Laravel", category: "backend", highlight: true },
  { label: "REST APIs", category: "backend", highlight: true },
  { label: "OAuth", category: "backend" },
  { label: "JWT", category: "backend" },

  // ── Mobile ──
  { label: "React Native", category: "mobile", highlight: true },
  { label: "Flutter", category: "mobile", highlight: true },

  // ── Database ──
  { label: "PostgreSQL", category: "database", highlight: true },
  { label: "MySQL", category: "database", highlight: true },
  { label: "SQLite", category: "database" },
  { label: "MongoDB", category: "database" },
  { label: "Firebase", category: "database" },
  { label: "Prisma", category: "database" },

  // ── Platforms & Tools ──
  { label: "Git / GitHub", category: "platforms" },
  { label: "Docker", category: "platforms" },
  { label: "Postman", category: "platforms" },
  { label: "Linux", category: "platforms" },
  { label: "Figma", category: "platforms" },
  { label: "VS Code", category: "platforms" },

  // ── AI & ML ──
  { label: "TensorFlow", category: "ai" },
  { label: "PyTorch", category: "ai" },
  { label: "LangChain", category: "ai" },
  { label: "Transformers", category: "ai" },
  { label: "YOLO/ONNX", category: "ai", highlight: true },
  { label: "OCR", category: "ai", highlight: true },
  { label: "LLaMA 3", category: "ai" },
  { label: "Ollama", category: "ai" },
];
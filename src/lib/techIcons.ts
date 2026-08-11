import {
  siTypescript,
  siJavascript,
  siReact,
  siNextdotjs,
  siVuedotjs,
  siTailwindcss,
  siBootstrap,
  siStyledcomponents,
  siFramer,
  siVite,
  siPrettier,
  siFlutter,
  siDart,
  siNodedotjs,
  siExpress,
  siNestjs,
  siFastapi,
  siLaravel,
  siPostgresql,
  siMysql,
  siSqlite,
  siMongodb,
  siFirebase,
  siPrisma,
  siJsonwebtokens,
  siGit,
  siGithub,
  siDocker,
  siPostman,
  siLinux,
  siFigma,
  // Machine Learning & AI — some of these are newer simple-icons entries;
  // if any import fails on your installed version, delete that one line
  // and the pill will just fall back to a monogram badge instead.
  siTensorflow,
  siPytorch,
  siLangchain,
  siHuggingface,
  siOnnx,
  siOllama,
  siMeta,
  siPython,
  siPhp
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// Keyed by the exact `label` string used in lib/data.ts skillGroups.
// Anything omitted here (REST APIs, OAuth) falls back to a monogram badge
// in <TechLogo /> — those don't have real brand marks.
export const techIconMap: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  React: siReact,
  "React Native": siReact,
  "Next.js": siNextdotjs,
  "Vue.js": siVuedotjs,
  "Tailwind CSS": siTailwindcss,
  Bootstrap: siBootstrap,
  "Styled Components": siStyledcomponents,
  "Framer Motion": siFramer,
  Vite: siVite,
  Prettier: siPrettier,
  Flutter: siFlutter,
  Dart: siDart,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  NestJS: siNestjs,
  FastAPI: siFastapi,
  Laravel: siLaravel,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  SQLite: siSqlite,
  MongoDB: siMongodb,
  Firebase: siFirebase,
  Prisma: siPrisma,
  JWT: siJsonwebtokens,

  // Platforms & Tools
  "Git / GitHub": siGithub,
  Docker: siDocker,
  Postman: siPostman,
  Linux: siLinux,
  Figma: siFigma,

  // Languages
  Python: siPython,
  PHP: siPhp,

  // Machine Learning & AI
  TensorFlow: siTensorflow,
  PyTorch: siPytorch,
  LangChain: siLangchain,
  // "Transformers" the library is Hugging Face's — using their brand mark
  // since there's no separate "Transformers" logo in simple-icons.
  Transformers: siHuggingface,
  // No dedicated YOLO logo exists; ONNX's mark stands in for the pair.
  "YOLO/ONNX": siOnnx,
  // OCR is a generic term, not a brand — falls back to monogram.
  Ollama: siOllama,
  // Llama 3 is Meta's model; using the Meta mark as the closest brand fit.
  "LLaMA 3": siMeta,
};
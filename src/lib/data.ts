import { Project, SkillGroup, MarqueeItem, DirectLink } from "./types";

// ── PROJECTS DATA ──────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "motorpass",
    iconName: "Cpu",
    githubUrls: [
        { label: "IoT System", url: "https://github.com/PaulPunzal/capstone-motorpass" },
        { label: "Web Portal", url: "https://github.com/PaulPunzal/motorpass-web" }
    ],
    iconBgStyle: "rgba(125,249,166,0.1)",
    label: "Capstone · IoT + AI",
    title: "MotorPass",
    fullTitle: "MotorPass — Smart Gate Pass System",
    role: "Capstone · Full-Stack Developer",
    shortDesc:
      "Smart motorcycle gate pass system with YOLO helmet detection, OCR license scanning, fingerprint biometrics, and live Firebase dashboard on Raspberry Pi 4.",
    fullDesc:
      "An IoT-based automated campus entry system deployed on a Raspberry Pi 4, replacing manual gate pass workflows with multi-factor AI verification. Integrates computer vision, biometrics, and dual-database resilience into a single cohesive system.",
    bullets: [
      "Engineered the end-to-end IoT pipeline on Raspberry Pi 4, integrating hardware peripherals and cloud services to fully replace manual gate pass workflows and improve throughput.",
      "Custom-trained a YOLO/ONNX machine learning model for real-time helmet detection, automatically enforcing campus safety compliance without human intervention.",
      "Implemented multi-factor authentication combining OCR-powered driver's license scanning with fingerprint biometrics for secure, verified vehicle entry.",
      "Architected a dual-database strategy using SQLite for resilient local event logging and Firebase Realtime Database for live synchronization — zero data loss during connectivity drops — with a live admin monitoring dashboard.",
    ],
    previewTags: ["Python", "YOLO/ONNX", "Raspberry Pi", "Firebase", "OCR", "Biometrics"],
    stack: [
      { label: "Python", highlight: true },
      { label: "YOLO/ONNX", highlight: true },
      { label: "Raspberry Pi 4", highlight: false },
      { label: "Firebase Realtime DB", highlight: false },
      { label: "SQLite", highlight: false },
      { label: "OCR", highlight: false },
      { label: "Biometrics", highlight: false },
    ],
  },
  {
    id: "little-lion",
    iconName: "BookOpen",
    iconBgStyle: "rgba(255,200,100,0.1)",
    label: "OJT · Lead Dev",
    title: "Little Lion SPED",
    fullTitle: "Little Lion — SPED School Management System",
    role: "OJT · Lead Developer & UI/UX",
    shortDesc:
      "Full SPED school management platform with 5 RBAC portals, real-time parent comms, and deployed during OJT.",
    fullDesc:
      "A specialized administrative platform for a Special Education school — covering full requirements gathering, architecture, and delivery. Built five tailored portals for distinct stakeholder groups with an emphasis on accessibility and clarity.",
    bullets: [
      "Led end-to-end development from requirements gathering to production deployment during OJT.",
      "Architected a Role-Based Access Control (RBAC) system with five distinct portals for Admins, Staff, Teachers, Therapists, and Parents — each showing only relevant data.",
      "Designed accessible, calming frontend interfaces using intentional color palettes (greens and whites) and clear information hierarchies for users including parents with varying technical literacy.",
      "Built a real-time parent communication hub with a structured \"Concerns\" ticketing system and live daily activity digests, significantly improving transparency and parent-teacher engagement.",
    ],
    previewTags: ["React", "Firebase", "RBAC"],
    stack: [
      { label: "React", highlight: true },
      { label: "Firebase Firestore", highlight: true },
      { label: "Firebase Auth", highlight: false },
      { label: "JavaScript", highlight: false },
      { label: "CSS", highlight: false },
      { label: "RBAC", highlight: false },
    ],
  },
  {
    id: "elearning",
    iconName: "GraduationCap",
    iconBgStyle: "rgba(100,150,255,0.1)",
    label: "Full-Stack · Mobile",
    title: "E-Learning Platform",
    fullTitle: "E-Learning & Assessment Platform",
    role: "Full-Stack & Mobile Developer",
    shortDesc:
      "Cross-platform mobile e-learning app with adaptive quiz engine, OTP auth, and custom PHP REST API backend.",
    fullDesc:
      "A cross-platform mobile e-learning ecosystem with a custom PHP backend. Delivers adaptive quizzes, OTP-based authentication, and RESTful data flows between a Flutter mobile frontend and a MySQL relational database.",
    bullets: [
      "Developed the cross-platform mobile app using Flutter/Dart, paired with a custom Vanilla PHP backend for a fully self-contained educational ecosystem.",
      "Engineered a dynamic quiz and assessment engine supporting score tracking, attempt history, and randomized difficulty levels across multiple lesson modules.",
      "Designed and implemented RESTful APIs managing complex relational data flows between the mobile frontend and MySQL database.",
      "Executed major database schema migrations and role restructuring to support new feature rollouts without downtime, while implementing secure OTP-based authentication.",
    ],
    previewTags: ["Flutter", "Dart", "PHP", "MySQL", "REST API"],
    stack: [
      { label: "Flutter", highlight: true },
      { label: "Dart", highlight: true },
      { label: "PHP (Vanilla)", highlight: false },
      { label: "MySQL", highlight: false },
      { label: "REST APIs", highlight: false },
      { label: "OTP Auth", highlight: false },
    ],
  },
  {
    id: "grocery",
    iconName: "ScanEye",
    githubUrls: [
      { label: "Mobile App", url: "https://github.com/PaulPunzal/Offline-GroceryList" }
    ],
    iconBgStyle: "rgba(255,100,150,0.1)",
    label: "Mobile · Offline-First",
    title: "Grocery OCR",
    fullTitle: "Offline Grocery List — Smart Utility App",
    role: "Mobile Developer",
    shortDesc:
      "Offline-first grocery app with AI-powered product scanning via device camera and OCR, zero internet required.",
    fullDesc:
      "An offline-first mobile productivity application built in TypeScript, designed to function entirely without internet connectivity. Uses on-device AI-powered OCR to capture product information directly from packaging — eliminating manual data entry.",
    bullets: [
      "Architected an offline-first architecture in TypeScript leveraging on-device local storage APIs — works fully with zero internet connectivity.",
      "Integrated device-native camera access with AI-powered OCR to instantly capture and parse product information from packaging, eliminating manual data entry.",
      "Implemented on-device scheduling algorithms and local notification management for list reminders and session persistence.",
    ],
    previewTags: ["React Native", "TypeScript", "Expo", "OCR"],
    stack: [
      { label: "React Native (Expo)", highlight: true },
      { label: "TypeScript", highlight: true },
      { label: "OCR", highlight: false },
      { label: "Local Storage APIs", highlight: false },
      { label: "Local Notifications", highlight: false },
    ],
  },
];

// ── SKILLS DATA ────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { label: "JavaScript" },
      { label: "TypeScript" },
      { label: "Dart" },
      { label: "Python" },
      { label: "PHP" },
      { label: "C#" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { label: "React", highlight: true },
      { label: "React Native", highlight: true },
      { label: "Flutter", highlight: true },
      { label: "Laravel" },
      { label: "Firebase SDK" },
    ],
  },
  {
    label: "Databases",
    items: [
      { label: "MySQL" },
      { label: "SQLite" },
      { label: "Firestore" },
      { label: "Prisma" },
    ],
  },
  {
    label: "AI / CV",
    items: [
      { label: "YOLO/ONNX", highlight: true },
      { label: "OCR", highlight: true },
      { label: "LLaMA 3" },
      { label: "Ollama" },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Git / GitHub" },
      { label: "Figma" },
      { label: "ADB" },
      { label: "Ngrok" },
      { label: "Unity" },
      { label: "Blender" },
    ],
  },
  {
    label: "Platforms",
    items: [
      { label: "Raspberry Pi 4" },
      { label: "Expo" },
      { label: "Firebase" },
    ],
  },
];

// ── MARQUEE ITEMS ──────────────────────────────────────────────────────────

export const marqueeItems: MarqueeItem[] = [
  { text: "FULL-STACK DEVELOPER" },
  { text: "MOBILE APP DEVELOPER" },
  { text: "REACT & NEXT.JS" },
  { text: "FLUTTER & DART" },
  { text: "COMPUTER VISION" },
  { text: "IOT SYSTEMS" },
  { text: "REST API DESIGN" },
  { text: "OPEN TO WORK" },
];

// ── CONTACT LINKS ──────────────────────────────────────────────────────────

export const directLinks: DirectLink[] = [
  {
    icon: "✉",
    label: "Email",
    value: "punzalpauljohn@gmail.com",
    href: "mailto:punzalpauljohn@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "0968-329-5292",
    href: "tel:09683295292",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/PaulNewbie",
    href: "https://github.com/PaulNewbie",
    external: true,
  },
];
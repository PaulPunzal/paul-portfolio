export interface StackItem {
  label: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  iconName: string;
  iconBgStyle: string;      // inline style color for icon background
  label: string;            // short label shown in bento preview
  title: string;            // short title for bento card
  fullTitle: string;        // long title for projects page
  role: string;
  shortDesc: string;        // bento card description
  fullDesc: string;         // projects page paragraph
  bullets: string[];
  previewTags: string[];    // small tags on bento card
  stack: StackItem[];
  githubUrls?: { label: string; url: string }[];
  images?: string[];       // <-- For screenshots/device photos
  certificates?: string[]; // <-- For OJT/Capstone certificates
}

export interface SkillItem {
  label: string;
  highlight?: boolean;
}

export interface SkillGroup {
  label: string;
  items: SkillItem[];
}

export interface MarqueeItem {
  text: string;
}

export interface DirectLink {
  icon: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;         // e.g. "Jun 2026" — edit freely per post
  readTime: string;     // e.g. "6 min"
  iconName: string;     // lucide icon name used on the placeholder cover
  coverBgStyle: string; // inline gradient for the placeholder cover
  content: string;      // lightweight markdown: "## " headings, "- " lists, **bold**, *italic*
}
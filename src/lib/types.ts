export interface StackItem {
  label: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  emoji: string;
  iconBgStyle: string;      // inline style color for icon background
  label: string;            // short label shown in bento preview
  title: string;            // short title for bento card
  fullTitle: string;        // long title for projects page
  role: string;
  shortDesc: string;        // bento card description
  fullDesc: string;         // projects page paragraph
  bullets: string[];
  previewTags: string[];    // small tags on bento card
  stack: StackItem[];       // full stack with highlight flags
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
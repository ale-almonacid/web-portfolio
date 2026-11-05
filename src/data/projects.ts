import type { TagName } from "@/data/tags"

import bg1 from "@/assets/bg/bg-1.png"
import bg2 from "@/assets/bg/bg-2.png"
import bg3 from "@/assets/bg/bg-3.png"

export type Project = {
  slug: string          // used in the URL: /projects/devsectool
  title: string
  subtitle: string
  summary: string
  timeline: string
  role: string
  tools: string[]
  image: string         // put images in /public/projects/
  bgImage?:string       // e.g. "Personal project"
  tags?: TagName[]         // tags
}

export const projects: Project[] = [
  {
    slug: "devsectool",
    title: "DevSecTool",
    subtitle:"Banking Cybersecurity Web App. Build for large German bank",
    summary: "As founding product designer, I owned the UX end to end, shaped the product concept and the design system. DevSecTool is a desktop Web App built to manage the bank’s security standards like ISO 27001 and internal policies like a checklist: compliance officers switch on the rules that apply, and implementation teams track each one to completion.",
    timeline: "2021 – 2025",
    role: "Founding Product Designer",
    tools: ["Figma", "Zeplin", "Jira", "Adobe"],
    image:"/projects/devsectool.png",
    bgImage: bg1,
    tags: ["B2B SaaS", "Design System", "0→1", "Fintech & Compliance"],
  },
  {
    slug: "better-life",
    title: "BetterLife",
    subtitle:"Modular health habit tracker App",
    summary: "BetterLife is a modular health habit tracker, designed mobile-first and built in Flutter so one codebase ships to iOS, Android and web. As founding product designer, I shape the product direction, UX and brand with the developer-founder, and test quick AI-built prototypes with real users to iterate faster.",
    timeline: "2024 – present",
    role: "Founding Product Designer (part-time)",
    tools: ["Figma", "Figma Make", "Claude"],
    image: "/projects/better-life.png",
    bgImage: bg2,
    tags: ["Mobile-first", "Cross-platform (iOS / Android / Web)", "0→1"],
  },
  {
    slug: "itinote",
    title: "Itinote",
    subtitle:"Minimalist travel itinerary app (personal project)",
    summary: "Itinote is a personal experiment in design engineering, taking a product from Figma to React. I started it from a simple need: a minimalist itinerary app with no recommendations, promotions or noise, just the essentials. Along the way, I explored the connection between design and development, and how tokens, React theme context, reusable components and Storybook can bridge both perspectives.",
    timeline: "2026",
    role: "Product Designer & Front-end Developer (solo) ",
    tools: ["Figma", "React (javaScript)", "Shadcn/ui, Tailwind, Storybook"],
    image: "/projects/itinote.png",
    bgImage: bg3,
    tags: ["Design Engineering", "Design tokens", "React", "Storybook"],
  },
]
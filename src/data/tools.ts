import figma from "@/assets/tech-stack/figma.svg"
import zeplin from "@/assets/tech-stack/zeplin.svg"
import jira from "@/assets/tech-stack/jira.svg"
import illustrator from "@/assets/tech-stack/ai.svg"
import photoshop from "@/assets/tech-stack/ps.svg"
import indesign from "@/assets/tech-stack/id.svg"
import figmaMake from "@/assets/tech-stack/figma-make.svg"
import claude from "@/assets/tech-stack/claude.svg"
import react from "@/assets/tech-stack/reactjs.svg"
import javascript from "@/assets/tech-stack/js.svg"
import tailwind from "@/assets/tech-stack/tailwind.svg"
import shadcn from "@/assets/tech-stack/shadcn.svg"
import storybook from "@/assets/tech-stack/storybook.svg"

import webflow from "@/assets/tech-stack/webflow.svg"
import adobecc from "@/assets/tech-stack/adobecc.svg"
import lottiefiles from "@/assets/tech-stack/lottiefiles.svg"
import github from "@/assets/tech-stack/gitlab.svg"
import csshtml from "@/assets/tech-stack/css-html.svg"
import mongodb from "@/assets/tech-stack/mongodb.svg"
import postfresql from "@/assets/tech-stack/postfresql.svg"
import typescript from "@/assets/tech-stack/typescript.svg"



export const tools = {
  Figma: figma,
  Zeplin: zeplin,
  Jira: jira,
  Illustrator: illustrator,
  Photoshop: photoshop,
  InDesign: indesign,
  "Figma Make": figmaMake,
  Claude: claude,
  React: react,
  JavaScript: javascript,
  Tailwind: tailwind,
  Shadcn: shadcn,
  Storybook: storybook,
  Webflow: webflow,
  "Adobe CC": adobecc,
  LottieFiles: lottiefiles,
  GitHub: github,
  "HTML/CSS": csshtml,
  MongoDB: mongodb,
  Postgres: postfresql,
  TypeScript: typescript,

} as const

export type ToolName = keyof typeof tools
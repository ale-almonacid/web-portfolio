export const tagStyles = {
  "B2B SaaS": "bg-[#799CB3]/15 text-[#0B3B5A]",
  "Design System": "bg-[#8610C9]/15 text-[#5A3A6C]",
  "0→1": "bg-[#0947F1]/15 text-[#082A88]",
  "Fintech & Compliance": "bg-[#799CB3]/15 text-[#0B3B5A]",
  "Mobile-first": "bg-[#5500F1]/15 text-[#350D80]",
  "Cross-platform (iOS / Android / Web)": "bg-[#04643A]/15 text-[#18543A]",
  "Design Engineering": "bg-[#A15808]/15 text-[#9B5E1C]",
  "Design tokens": "bg-[#8610C9]/15 text-[#5A3A6C]",
  "React": "bg-[#06AFE2]/15 text-[#16576B]",
  "Storybook": "bg-[#D00064]/15 text-[#6D0939]",
} as const

export type TagName = keyof typeof tagStyles
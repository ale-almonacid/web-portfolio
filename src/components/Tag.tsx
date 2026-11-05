import { tagStyles, type TagName } from "@/data/tags"

function Tag({ name }: { name: TagName }) {
  return (
    <span className={`rounded-sm px-2 py-0.5 text-[9pt] ${tagStyles[name]}`}>
      {name}
    </span>
  )
}

export default Tag
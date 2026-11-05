import { tagStyles, type TagName } from "@/data/tags"

function Tag({ name }: { name: TagName }) {
  return (
     <span className="inline-block rounded-sm bg-white/50">
      <span className={`block rounded-sm px-2 py-0.5 text-xs ${tagStyles[name]}`}>
        {name}
      </span>
    </span>
   
  )
}

export default Tag
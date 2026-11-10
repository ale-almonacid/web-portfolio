import { tools, type ToolName } from "@/data/tools"

function ToolTile({ name }: { name: ToolName }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div key={name} className="flex flex-col items-center gap-2">
        <img src={tools[name]} alt="" className="size-14 drop-shadow-2xl"></img>

        <span className="text-sm text-muted-foreground">{name}</span>
      </div>
    </div>
  )
}

export default ToolTile

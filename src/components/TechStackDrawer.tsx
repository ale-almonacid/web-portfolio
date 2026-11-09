
"use client"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { tools, type ToolName } from "@/data/tools"

type Props = { toolList: ToolName[] }

function TechStackDrawer({ toolList }: Props) {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" size="sm">Tech Stack</Button>} />
      
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Tech Stack</DrawerTitle>
          <DrawerDescription>Tools I used to make this project</DrawerDescription>
        </DrawerHeader>
        <div className="my-4 mx-4 grid grid-cols-3 gap-6 rounded-2xl bg-muted p-6">
          {toolList.map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
             
                <img src={tools[name]} alt="" className="size-14"></img> 
              
              <span className="text-sm text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>

        <DrawerFooter>
          <DrawerClose render={<Button size={"lg"}>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default TechStackDrawer
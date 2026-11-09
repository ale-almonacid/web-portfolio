
"use client"
import { NavLink } from "react-router"
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

import { X } from "lucide-react"
import { ArrowRight } from "lucide-react"

import { tools, type ToolName } from "@/data/tools"

type Props = { slug: string; toolList: ToolName[] }

function TechStackDrawer({slug, toolList }: Props) {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" size="sm">Tech Stack</Button>} />
      
      <DrawerContent>
         <DrawerClose
    aria-label="Close"
    className="absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full bg-bluegray-100 text-foreground"
  >
    <X className="size-5" />
  </DrawerClose>
        <DrawerHeader>
          <DrawerTitle>Tech Stack</DrawerTitle>
          <DrawerDescription>Tools I used to make this project</DrawerDescription>
        </DrawerHeader>
        <div className="my-4 mx-4 grid grid-cols-3 gap-6 rounded-xl bg-muted p-6">
          {toolList.map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
             
                <img src={tools[name]} alt="" className="size-16 drop-shadow-2xl"></img> 
              
              <span className="text-sm text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>

        <DrawerFooter>
            <Button size={"lg"}  nativeButton={false}
    render={<NavLink to={`/projects/${slug}`} />}
  >See case study
                <ArrowRight className="size-5"></ArrowRight>
            </Button>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default TechStackDrawer
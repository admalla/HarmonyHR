"use client"

import {Button} from "@/components/ui/button";
import {menuItems} from "@/shared/constans/MenuItems";
import {useStore} from "@/store/useStore";

export const MenuHeader = () => {
  const { setState, menuItem } = useStore();

  return (
    <div className="flex items-center justify-end">
      {menuItems.map((item, index) => (
        <div key={index} className={item === menuItem ? "h-[50px] mb-[-18px] rounded-t-md bg-[#DAE6F2]" : ""}>
          <Button
            onClick={() => setState({menuItem: item})}
            variant="ghost"
          >
            {item}
          </Button>
        </div>
      ))}
    </div>
  )
}
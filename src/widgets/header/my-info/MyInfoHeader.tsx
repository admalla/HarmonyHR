"use client"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useStore} from "@/store/useStore";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from "@/components/ui/select";
import {Settings} from "@/assets/icons/Settings";
import {menuItemsMyInfo} from "@/shared/constans/MenuItems";
import {Button} from "@/components/ui/button";

export const MyInfoHeader = () => {
  const {user} = useStore()
  return (
    <div>
      <div className="flex items-end justify-between w-full pl-20 pr-10  pt-6 bg-[#DAE6F2]">
        <Avatar className="w-[150px] h-full mr-14">
          <AvatarImage src={user?.avatar}/>
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <div className="flex items-center justify-between mb-6 w-full">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {user?.name}
            </h2>
            <div className="flex items-center justify-between gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Request a Change"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Items</SelectLabel>
                    <SelectItem value="item-1">item-1</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <Settings/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-2.5">
            {menuItemsMyInfo.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={item === 'Time Off' ? "h-[40px] mb-[-4px] rounded-t-md bg-white" : ""}
              >{item}</Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import {ReactNode} from "react";
import {MyInfoHeader} from "@/widgets/header/my-info/MyInfoHeader";
import {Sidebar} from "@/widgets/layouts/my-info-layout/sidebar/Sidebar";

type Props = {
  children: ReactNode
}

export const MyInfoLayout = ({ children }: Props) => {
  return (
    <div className="w-full bg-[#F0F3F8]">
      <MyInfoHeader/>
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-cyan-50 ml-[18px] mr-[38px]">{children}</div>
      </div>
    </div>
)
}
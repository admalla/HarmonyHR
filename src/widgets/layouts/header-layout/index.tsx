"use client"

import {FC, ReactNode} from "react";
import {HeaderWidget} from "@/widgets/header/main/HeaderWidget";

type Props = {
  children: ReactNode
}

export const HeaderLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
        <HeaderWidget />
      <div className="w-full flex  justify-center items-center">{children}</div>
    </div>
  )
}
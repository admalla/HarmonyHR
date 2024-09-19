"use client"

import {Card, CardContent} from "@/components/ui/card";
import {ReactNode} from "react";

type Props = {
  name: string
  value: { icon: ReactNode, desc: number }
  description: string
  more?: string
  underText: string
}
export const CardSick = ({ name, more, value, description, underText }: Props) => {
  return (
    <div className="w-[265px] text-center">
      <Card className="rounded-none h-[140px] pt-4 mb-1.5 bg-[#F0F3F8]">
        <CardContent className="flex flex-col gap-1.5 pb-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {name}
          </h4>
          <div className="flex items-center justify-center gap-1.5">
            {value.icon}
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {value.desc}
            </h3>
          </div>
          <p className=" text-sm font-bold leading-[17px]">{description}</p>
          <p className=" text-sm font-medium text-[#7C96B1] leading-[17px]">{more}</p>

        </CardContent>
      </Card>
      <p className=" text-sm font-medium text-[#7C96B1] leading-[17px]">{underText}</p>
    </div>
  )
}
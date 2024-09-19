"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Phone} from "@/assets/icons/Phone";
import {Mail} from "@/assets/icons/Mail";
import {In} from "@/assets/icons/In";
import {Fb} from "@/assets/icons/Fb";
import {Twitter} from "@/assets/icons/Twitter";
import {Lattice} from "@/assets/icons/Lattice";
import {Time} from "@/assets/icons/Time";
import {Team} from "@/assets/icons/Team";
import {Peace} from "@/assets/icons/Peace";
import {Location} from "@/assets/icons/Location";
import {User} from "@/assets/icons/User";

export const Sidebar = () => {
  return (
    <div className="ml-12">
      <div className="w-[220px] mt-[-20px]">
        <Card className="border-0 shadow-none pt-6">
          <CardContent>
            <div className="flex items-center gap-2.5">
              <Phone/>
              <span className="text-sm font-medium leading-[17px]">07911 654321</span>
            </div>
            <div className="flex items-center gap-2.5 my-2">
              <Mail/>
              <span className="text-sm font-medium leading-[17px]">avd.yana@videorollnet</span>
            </div>
            <div className="flex items-center gap-2.5">
              <In/>
              <Fb/>
              <Twitter/>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-[220px] mt-5">
        <Card className="border-0 shadow-none pt-6">
          <CardContent>
            <p className="text-sm font-medium leading-[17px]">Hire Date</p>
            <p className="text-sm font-medium leading-[17px] my-1">Sep. 3,2020</p>
            <p className="text-sm font-medium leading-[17px]">3y - 9m - 20d</p>
          </CardContent>
        </Card>
      </div>
      <div className="w-[220px] mt-5">
        <Card className="border-0 shadow-none pt-6">
          <CardContent>
            <div className="flex items-center gap-2.5">
              <Lattice/>
              <span className="text-sm font-medium leading-[17px]">5</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <Time/>
              <span className="text-sm font-medium leading-[17px]">Full-Time</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <Team/>
              <span className="text-sm font-medium leading-[17px]">Operations</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <Peace/>
              <span className="text-sm font-medium leading-[17px]">Europe</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <Location/>
              <span className="text-sm font-medium leading-[17px]">London, UK</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-[220px] mt-5">
        <Card className="border-0 shadow-none pt-6">
          <CardContent>
            <p className="text-sm font-medium leading-[17px]">Direct Reports</p>
            <div className="flex items-center gap-2.5 mt-1">
              <User/>
              <span className="text-sm font-medium leading-[17px]">Shane</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <User/>
              <span className="text-sm font-medium leading-[17px]">Nathan</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <User/>
              <span className="text-sm font-medium leading-[17px]">Mitchell</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <User/>
              <span className="text-sm font-medium leading-[17px]">Philip</span>
            </div>
            <div className="flex items-center gap-2.5 mt-1">
              <Team/>
              <span className="text-sm font-medium leading-[17px]">4 More...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
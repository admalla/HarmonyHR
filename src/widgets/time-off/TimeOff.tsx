"use client"

import {TimeOffIcon} from "@/assets/icons/TimeOffIcon";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {CardSick} from "@/widgets/time-off/CardSick";
import {Plus} from "@/assets/icons/Plus";
import {Mountain} from "@/assets/icons/Mountain";
import {Time} from "@/assets/icons/Time";
import {Pig} from "@/assets/icons/Pig";
import {Select, SelectTrigger} from "@/components/ui/select";
import {TableWrapper} from "@/widgets/time-off/TableWrapper";
import {History} from "@/assets/icons/History";

export default function TimeOff () {
  return (
    <div className="px-2.5 py-4">
      <section id={'Time Off'} className="mb-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center g-2">
            <TimeOffIcon/>
            <p className="text-[#204973]">Time Off</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium leading-[17px]">
              Accrual Level Start Date
              <span className="text-blue-700 text-sm font-medium leading-[17px]">03/09-2020</span>
            </p>
            <Button variant="outline">
              <span className="text-sm font-medium leading-[17px]">Add Time Off Policy</span>
            </Button>
          </div>
        </div>
        <Separator className="bg-[#7C96B1] my-2.5" orientation="horizontal"/>
        <div className="flex justify-center gap-10">
          <CardSick
            name={'Sick'}
            value={{icon: <Plus/>, desc: 3}}
            description={'Days Available'}
            more={'1 dey scheduled'}
            underText={'Sick Full-Time'}
          />
          <CardSick
            name={'Annual Leave '}
            value={{icon: <Mountain/>, desc: 10.3}}
            description={'Days Available'}
            underText={'Holiday Full-Time'}
          />
          <CardSick
            name={'Comp/in Lieu Time'}
            value={{icon: <TimeOffIcon viewBox={'0 0 34 33'} width={'34'} height={'33'}/>, desc: 0}}
            description={'Human Used(YTD)'}
            underText={'Comp/in Lieu Time Flexible Policy'}
          />
        </div>
      </section>
      <section id={'Upcomming Time Off'} className="mb-7">
        <div className="flex items-center gap-1.5">
          <Time/>
          <p className="text-sm font-medium text-[#204973] leading-[17px]">Upcoming Time Off</p>
        </div>
        <Separator className="bg-[#7C96B1] mt-2.5 mb-5" orientation="horizontal"/>
        <div className="flex items-center gap-1.5">
          <Plus/>
          <div className="text-sm font-medium leading-[17px]">
            <p>Jan 27</p>
            <ol>
              <li>1 day of Sick</li>
            </ol>
          </div>
        </div>
        <Separator className="bg-[#7C96B1] my-5" orientation="horizontal"/>
        <div className="flex items-center gap-1.5">
          <Pig/>
          <div className="text-sm font-medium leading-[17px]">
            <p>Jul 8</p>
            <p>Independence Day</p>
          </div>
        </div>
        <Separator className="bg-[#7C96B1] my-5" orientation="horizontal"/>
      </section>
      <section id={'History'}>
        <div className="flex gap-1.5">
          <History />
          <p className="text-[#204973] text-sm font-medium leading-[17px] mb-4">History</p>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[200px]">
                <div className="flex justify-between w-full">
                  <span>Sick</span>
                  <span className="text-gray-400 mr-2">x</span>
                </div>
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px]">
                <div className="flex justify-between w-full">
                  <span>All</span>
                  <span className="text-gray-400 mr-2">x</span>
                </div>
              </SelectTrigger>
            </Select>
          </div>
          <Select>
            <SelectTrigger className="w-fit">
              <span className=" mr-2">Balance History</span>
            </SelectTrigger>
          </Select>
        </div>
        <TableWrapper />
      </section>
    </div>
  )
}
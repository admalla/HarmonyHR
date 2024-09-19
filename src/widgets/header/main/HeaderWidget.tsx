"use client"

import {useQuery} from "@apollo/client";
import {useEffect} from "react";
import {useStore} from "@/store/useStore";
import {MenuHeader} from "@/widgets/header/main/MenuHeader";
import {Input} from "@/components/ui/input";
import {Settings} from "@/assets/icons/Settings";
import {Question} from "@/assets/icons/Question";
import {Bell} from "@/assets/icons/Bell";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {GET_USER} from "@/services/apollo/apollo-requests";
import {useRouter} from "next/navigation";

export const HeaderWidget = () => {

  const {data} = useQuery(GET_USER)
  const { setState, user } = useStore();
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      if (data) {
        try {
          const { name, avatar } = await data.myProfile
          setState({user: {name, avatar}})
        } catch (err) {
          console.error(err)
        }
      }
    }
    getUser()
  }, [data])

  const onLogOut = () => {
    localStorage.clear()
    router.push('/login')
  }
  return (
    <div className="flex items-center justify-between pl-3 pr-3 pb-2 h-[80px]">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mr-14">
        HarmonyHR
      </h3>
      <div className="flex items-end justify-between w-full mb-[-30px]">
        <MenuHeader/>
        <Input type="search" placeholder="Search" />
        <div className="flex items-center justify-between gap-2">
          <Settings />
          <Question />
          <Bell />
          <Avatar>
            <AvatarImage  src={user?.avatar} />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
          <Button onClick={onLogOut} variant="outline" >Log Out</Button>
        </div>
      </div>
    </div>
  )
}
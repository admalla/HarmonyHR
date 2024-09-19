"use client"

import {HeaderLayout} from "@/widgets/layouts/header-layout";
import {useStore} from "@/store/useStore";
import {useRouter} from "next/navigation";
import {useAuth} from "@/shared/lib/hooks/useAuth";
import {MyInfoLayout} from "@/widgets/layouts/my-info-layout";
import TimeOff from "@/widgets/time-off/TimeOff";

const component = {
  Home: <div>Home</div>,
  'My info': <MyInfoLayout><TimeOff /></MyInfoLayout>,
  People: <div>People</div>,
  Hiring: <div>Hiring</div>,
  Reports: <div>Reports</div>,
  Files: <div>Files</div>,
}

export default function Home() {
  const { menuItem: item } = useStore()
  const router = useRouter()
  const {isAuth} = useAuth()

  if (!isAuth) {
    router.push('/login')
  }

  return (
        <HeaderLayout>
          {component[item]}
        </HeaderLayout>
  )
}

import Image from 'next/image'

import ArrowLeft from '@/public/img/arrow-left.svg'
import ArrowRight from '@/public/img/arrow-right.svg'
import Burguer from '@/public/img/burguer.svg'
import Clock from '@/public/img/clock.svg'
import CloseIcon from '@/public/img/close-icon.svg'
import LogoCalendar from '@/public/img/mi-calendar.svg'
import Profile from '@/public/img/profile.svg'
import Search from '@/public/img/search.svg'

interface ISvgAssets {
  name: Asset
  width: number
  height: number
  alt: string
}

export enum Asset {
  Calendar = '/img/calendar.svg',
  Diagram = '/img/diagram.svg',
  Logout = '/img/logout.svg',
  Message = '/img/message.svg',
  Settings = '/img/settings.svg'
}

export default function Svg({ name, width, height, alt }: ISvgAssets) {
  return <Image src={name} width={width} height={height} alt={alt} />
}

export {
  ArrowLeft,
  ArrowRight,
  Burguer,
  Clock,
  CloseIcon,
  LogoCalendar,
  Profile,
  Search
}

'use client'

import Image from 'next/image'
import vizeSVG from '@/assets/logotype.svg'
import { NavMenu } from './components/NavMenu'
import { SwitchMode } from './components/SwitchMode'

export function Header() {
  return (
    <header className=" flex h-max w-full items-center justify-between border-b border-slate-500/20 bg-gradient-to-b from-black/75 to-black/20 px-32 py-6 backdrop-blur max-lg:px-8 max-md:justify-center">
      <div className="max-md:hidden">
        <Image src={vizeSVG} alt="" width={170} />
      </div>
      <div className="flex flex-1 items-center justify-end gap-4 max-sm:justify-center ">
        <div className="flex w-full gap-2">
          <NavMenu />
        </div>
        <div>
          <SwitchMode />
        </div>
      </div>
    </header>
  )
}
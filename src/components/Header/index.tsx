'use client'

import Image from 'next/image'
import vizeSVG from '@/assets/logotype.svg'
import { NavMenu } from './components/NavMenu'
import { SwitchMode } from './components/SwitchMode'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex h-max w-full items-center justify-between border-b border-slate-500/20 bg-gradient-to-b from-black/75 to-black/20 px-32 py-6 backdrop-blur max-lg:px-8 max-md:justify-center">
      <div className="max-md:hidden">
        <Link href="/">
          <Image src={vizeSVG} alt="" width={170} />
        </Link>
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

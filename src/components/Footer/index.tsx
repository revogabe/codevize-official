'use client'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import {
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'

export default function Footer() {
  return (
    <main className="flex h-max w-full flex-col items-center justify-center gap-8 py-12">
      <div className="flex h-max w-max gap-6 py-2">
        <div className="flex h-max w-max cursor-pointer rounded-full bg-transparent p-3 text-heading transition-all duration-300 ease-out hover:bg-gray-600/10 hover:text-primarycolor">
          <TwitterLogo width={24} height={24} />
        </div>
        <div className="flex h-max w-max cursor-pointer rounded-full bg-transparent p-3 text-heading transition-all duration-300 ease-out hover:bg-gray-600/10 hover:text-primarycolor">
          <InstagramLogo width={24} height={24} />
        </div>
        <div className="flex h-max w-max cursor-pointer rounded-full bg-transparent p-3 text-heading transition-all duration-300 ease-out hover:bg-gray-600/10 hover:text-primarycolor">
          <GitHubLogoIcon width={24} height={24} />
        </div>
        <div className="flex h-max w-max cursor-pointer rounded-full bg-transparent p-3 text-heading transition-all duration-300 ease-out hover:bg-gray-600/10 hover:text-primarycolor">
          <YoutubeLogo width={24} height={24} />
        </div>
        <div className="flex h-max w-max cursor-pointer rounded-full bg-transparent p-3 text-heading transition-all duration-300 ease-out hover:bg-gray-600/10 hover:text-primarycolor">
          <TiktokLogo width={24} height={24} />
        </div>
      </div>
      <div className="flex h-max w-max">
        <p className="text-sm text-slate-300/20">
          @2023 Codevize. All rights reserved.
        </p>
      </div>
    </main>
  )
}

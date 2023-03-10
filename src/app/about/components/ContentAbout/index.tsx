'use client'

import { Question } from 'phosphor-react'
import Image from 'next/image'

import ImageAbout from '@/assets/containerimage.png'

type ContentAboutProps = {
  heading: string
  description1: string
  description2: string
  description3: string
  description4: string
}

export function ContentAbout({
  heading,
  description1,
  description2,
  description3,
  description4,
}: ContentAboutProps) {
  return (
    <main
      className="flex w-1/2 flex-col gap-8
    
    max-lg:w-4/5
    "
    >
      <div className="flex flex-row gap-3">
        <h1 className="text-3xl font-extrabold text-white">{heading}</h1>
        <Question className="text-primarycolor" size={38} weight="fill" />
      </div>
      <div className="h-px w-full bg-info100" />
      <div className="flex flex-col gap-8">
        <p className="text-white">{description1}</p>
        <p className="text-white">{description2}</p>
        <p className="text-white">{description3}</p>
        <p className="text-white">{description4}</p>
        <Image src={ImageAbout} alt="" width={1280} />
      </div>
    </main>
  )
}

'use client'

import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

type ProjectItemProps = {
  image: string
  imageMobile: string
  title: string
  description: string

  githubLink: string
  liveLink: string
  idparams: string
}

export default function ProjectItem({
  image,
  imageMobile,
  title,
  description,
  githubLink,
  liveLink,
  idparams,
}: ProjectItemProps) {
  return (
    <div
      className="group flex w-full cursor-pointer gap-4 rounded-md bg-info500
    
      p-6 shadow-lg shadow-black/75 transition-all
      duration-300 ease-out

      hover:-translate-y-2

      hover:brightness-125

      max-2xl:flex-col

    "
    >
      <div
        className="w-400 flex  min-w-fit
      
      max-2xl:h-40
      max-xl:min-w-0
      max-lg:hidden
      "
      >
        <Image
          src={image}
          alt=""
          width={280}
          height={340}
          style={{ objectFit: 'cover', width: '100%', borderRadius: '6px' }}
        />
      </div>
      <div className="w-full lg:hidden">
        <Image
          src={imageMobile}
          alt=""
          width={400}
          height={154}
          style={{
            objectFit: 'cover',
            width: '100%',
            maxHeight: '154px',
            borderRadius: '6px',
          }}
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-4">
        <div>
          <h1
            className="mb-1 text-xl font-bold text-primaryhover/80
            
            transition-all duration-300 ease-out
          group-hover:text-primarycolor
          
            max-sm:text-lg
          "
          >
            {title}
          </h1>
          <p className="text-sm text-description/80 max-sm:text-xs">
            {description}
          </p>
        </div>
        <div className="flex gap-2">
          <Link href={githubLink}>
            <button
              className="hover:border-primarycolo flex h-max items-center
              justify-center gap-2 rounded-md border border-gray-600/10 bg-gray-600/10 py-2

              px-6 text-gray-400 transition-all

              duration-300 ease-out hover:border-primarycolor hover:bg-black/10 hover:text-primarycolor
            "
            >
              Repo <GitHubLogoIcon />
            </button>
          </Link>
          <Link href={liveLink}>
            <button
              className="hover:border-primarycolo flex h-max items-center
              justify-center gap-2 rounded-md border border-gray-600/10 bg-gray-600/10 py-2

              px-6 text-gray-400 transition-all

              duration-300 ease-out hover:border-primarycolor hover:bg-black/10 hover:text-primarycolor
            "
            >
              Live <GlobeIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

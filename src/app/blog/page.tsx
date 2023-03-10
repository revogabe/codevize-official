'use client'

import Tilt from 'react-parallax-tilt'

export default function Blog() {
  const code = `Work in progress`

  return (
    <main
      className="first-letter: mx-12 flex h-screen items-center
    
      justify-center
      max-md:mt-32

      max-sm:mx-6
      "
    >
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        transitionSpeed={2000}
        className="z-0 flex w-full max-w-lg flex-col items-start gap-6 rounded-lg bg-info500
      
      p-6 pr-40
      
      max-md:pr-6"
      >
        <div className="flex w-full items-center justify-start gap-2 ">
          <div className="h-3 w-3 rounded-full bg-red-500 " />
          <div className="h-3 w-3 rounded-full bg-orange-400 " />
          <div className="h-3 w-3 rounded-full bg-primarycolor " />
        </div>
        <div className="flex w-full text-gray-100">
          <h1>{code} </h1>
        </div>
      </Tilt>
    </main>
  )
}

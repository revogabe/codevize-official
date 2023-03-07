'use client'

import Tilt from 'react-parallax-tilt'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function WindowCode() {
  const code = `  import { WindowCode } from '@/components/WindowCode'

  export default function Page() {
  return (
  <main className="tailwind main">
  <div className="tailwind div">
    <div className="flex flex-col max-w-xl h-max gap-10">
      <div className="flex flex-col max-w-xl h-max gap-4">
        <h1 className="tailwind h1">
          Hi, We’re{' '}
          <span className="tailwind span">
            Codevize
          </span>
        </h1>
        <p className="text-xl text-description">
          Lorem ipsum dolor sit amet. Et earum
          quisquam culpa saepe. Ab dolorem
        </p>
      </div>
        <button className="animation">Our projects!</button>
      </div>
    </div>
  </main>
  )
}`

  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      transitionSpeed={2000}
      className="z-0 flex w-full flex-col items-start gap-6 rounded-lg bg-info500 p-6
      
      pr-40
      
      max-md:pr-6"
    >
      <div className="flex w-full items-center justify-start gap-2 ">
        <div className="h-3 w-3 rounded-full bg-red-500 " />
        <div className="h-3 w-3 rounded-full bg-orange-400 " />
        <div className="h-3 w-3 rounded-full bg-primarycolor " />
      </div>
      <div className="flex w-full text-gray-100">
        <SyntaxHighlighter
          language="typescript"
          style={nightOwl}
          customStyle={{
            background: 'transparent',
            filter: 'saturate(1.5)',
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
            padding: '0',
            fontSize: '1rem',
            overflow: 'hidden',
          }}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </Tilt>
  )
}

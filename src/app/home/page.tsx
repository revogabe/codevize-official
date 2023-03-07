'use client'
import { WindowCode } from '@/components/WindowCode'
import { Heading } from './components/Heading'

export default function Page() {
  return (
    <main
      className=" mx-32 flex h-screen items-center
    
    justify-between

    gap-16

    max-2xl:mx-8 max-xl:my-16 

    max-xl:flex-col

    xl:mt-[-32px]
    "
    >
      <div className="flex flex-1">
        <Heading
          title="Hi, We’re "
          subtitle="Codevize"
          description="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
          buttonTitle="Our projects!"
        />
      </div>
      <div className="flex max-md:w-full">
        <WindowCode />
      </div>
    </main>
  )
}

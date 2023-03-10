import { WindowCode } from '@/components/WindowCode'
import { Heading } from './components/Heading'

export default function Page() {
  return (
    <main
      className=" mx-32 flex h-screen items-center
    
    justify-between
      
    gap-20

    max-2xl:mx-8 max-xl:my-16 

    max-xl:mt-40
    max-xl:mb-8
    max-xl:h-full
    max-xl:flex-col
    xl:mt-14
    "
    >
      <div className="flex flex-1">
        <Heading
          title="Hi, We’re "
          subtitle="Codevize"
          description="We are a team of 2 friends passionate about tech, dedicating ourselves every day to achieve our dream of becoming developers."
          buttonTitle="Our projects!"
        />
      </div>
      <div className="flex max-md:w-full">
        <WindowCode />
      </div>
    </main>
  )
}

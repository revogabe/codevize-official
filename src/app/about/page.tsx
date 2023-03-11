import { ContentAbout } from './components/ContentAbout'

export default function Page() {
  return (
    <main
      className="mt-40 flex h-screen items-start justify-center 
    
    gap-10
    max-xl:mb-8
    max-xl:h-full
    max-md:mt-32
    "
    >
      <ContentAbout
        heading="About"
        description1="
        🙋 Hi! We are Codevize. Codevize is more than just a project. It's our passion for technology, our commitment to sharing our learnings, and a journey of personal and professional development. We started this project with the goal of helping people who are starting out in the field to achieve their goals, showing that it's possible to evolve with persistence and dedication."
        description2="With the Codevize project, we're solving a problem every week with programming, creating innovative solutions, and developing our skills. Daniel Gabriel is our front-end expert, with skills in React, NextJS, Node, and agile methodologies, as well as experience in marketing and design. Kelvin is our back-end expert, with experience in Python, Node, MySQL, and other technologies, bringing robust solutions to our projects."
        description3="Together, we're building a community of developers committed to learning and growth, and we hope our efforts inspire others to pursue their dreams in the technology field. Remember, no matter which path you choose, persist, dedicate yourself, and always keep your passion alive."
        description4="We started as two friends passionate about technology, and today, with Codevize, we're building a legacy. We hope to inspire others to pursue their dreams, just as we're pursuing ours. Keep the passion for technology alive and join us on this exciting journey."
      />
    </main>
  )
}

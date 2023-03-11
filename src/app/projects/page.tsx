import { Key } from 'react'
import ProjectItem from './components/ProjectItem'
// import image

interface dataProject {
  id: Key | null | undefined
  titleproject: string
  desc: string
  imageweb: string
  imagemobile: string
  gitlink: string
  livelink: string
  idparams: string
}

export default async function Projects() {
  const response = await fetch(
    'https://api.mocki.io/v2/ec46ab1c/api/codevize',
    {
      cache: 'no-store',
    },
  )
  const data = await response.json()

  return (
    <main
      className="first-letter: mx-12 mt-44 flex h-screen items-center
    
      justify-center
      max-xl:mt-40 max-xl:mb-8 max-xl:h-full
      max-xl:flex-col max-md:mt-32 max-sm:mx-6
      "
    >
      <div className="h-full max-w-screen-2xl ">
        <ul
          className="grid grid-cols-2 gap-8
        
          
          max-lg:grid-cols-1
          max-lg:gap-6
        "
        >
          {data.map((project: dataProject) => (
            <ProjectItem
              key={project.id}
              title={project.titleproject}
              description={project.desc}
              image={project.imageweb}
              imageMobile={project.imagemobile}
              githubLink={project.gitlink}
              liveLink={project.livelink}
              idparams={project.idparams}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}

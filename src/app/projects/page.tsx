import ProjectItem from './components/ProjectItem'
// import image
import projectsquare from '@/assets/imagesProjects/projectsquare.png'
import projectMobile from '@/assets/imagesProjects/projectmobile.png'

export default function Projects() {
  return (
    <main
      className="first-letter: mx-12 mt-44 flex h-screen items-center
    
      justify-center
      max-md:mt-32

      max-sm:mx-6
      "
    >
      <div className="h-full max-w-screen-2xl">
        <ul
          className="grid grid-cols-2 gap-8
        
          max-lg:grid-cols-1
          max-lg:gap-6
        "
        >
          <ProjectItem
            image={projectsquare}
            imageMobile={projectMobile}
            title="Movie Shuffle"
            description="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
            githubLink="https://github.com/revogabe/movie-shuffle"
            liveLink="https://movie-shuffle.vercel.app/"
          />
          <ProjectItem
            image={projectsquare}
            imageMobile={projectMobile}
            title="Movie Shuffle"
            description="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
            githubLink="https://github.com/revogabe/movie-shuffle"
            liveLink="https://movie-shuffle.vercel.app/"
          />
          <ProjectItem
            image={projectsquare}
            imageMobile={projectMobile}
            title="Movie Shuffle"
            description="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
            githubLink="https://github.com/revogabe/movie-shuffle"
            liveLink="https://movie-shuffle.vercel.app/"
          />
          <ProjectItem
            image={projectsquare}
            imageMobile={projectMobile}
            title="Movie Shuffle"
            description="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
            githubLink="https://github.com/revogabe/movie-shuffle"
            liveLink="https://movie-shuffle.vercel.app/"
          />
        </ul>
      </div>
    </main>
  )
}

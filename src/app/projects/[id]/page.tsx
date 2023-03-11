interface ProjectIdProps {
  params: {
    id: string
  }
}

export default async function ProjectsId({ params }: ProjectIdProps) {
  return (
    <main
      className="mt-40 flex h-screen items-start justify-center 
    
    gap-10
    max-xl:mb-8
    max-xl:h-full
    max-md:mt-32
    "
    >
      <h1 className="text-4xl font-bold text-primarycolor">
        About: {params.id}
      </h1>
    </main>
  )
}

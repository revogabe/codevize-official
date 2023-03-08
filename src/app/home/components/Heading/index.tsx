import Link from 'next/link'

type HeadingProps = {
  title: string
  subtitle: string
  description: string
  buttonTitle: string
}

export function Heading({
  title,
  subtitle,
  description,
  buttonTitle,
}: HeadingProps) {
  return (
    <div
      className="flex flex-col justify-start gap-8 
    
    max-xl:items-center max-xl:justify-center"
    >
      <div className="flex max-w-2xl flex-col flex-wrap gap-3">
        <h1
          className="flex h-max flex-wrap items-center gap-3 text-6xl font-bold text-primarycolor
        
        max-lg:items-center max-lg:justify-center
        max-lg:text-center max-lg:text-5xl

        max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:text-4xl
        "
        >
          {title}
          <span
            className="cursor-pointer rounded-md text-6xl text-heading transition-all duration-300 ease-out hover:bg-slate-600/10 hover:py-3 hover:px-6 hover:text-primarycolor hover:shadow-lg hover:shadow-black/30
          
          max-lg:py-2 max-lg:text-5xl
          
          
          max-sm:py-1 max-sm:text-4xl"
          >
            {subtitle}
          </span>
        </h1>
        <p
          className="
          w-full max-w-lg text-xl text-description
        
          max-xl:text-center
          
          max-lg:max-w-md max-lg:text-lg

          max-sm:text-base
          "
        >
          {description}
        </p>
      </div>
      <Link href="/projects">
        <button
          className="
              w-full
              max-w-sm rounded-lg bg-primarycolor
                px-8 py-4 text-xl font-bold text-white
                shadow-lg shadow-primarycolor/30 transition-all
                
              duration-300 ease-out 
                hover:bg-primaryhover hover:text-primarycolor

              hover:shadow-heading/25 max-2xl:max-w-xs max-2xl:px-6 max-2xl:py-3 max-2xl:text-lg max-2xl:shadow-lg max-2xl:shadow-primarycolor/20 max-xl:max-w-sm max-xl:px-8 max-xl:py-4 max-xl:text-xl max-xl:shadow-lg max-xl:shadow-primarycolor/30 max-md:max-w-xs max-md:px-6 max-md:py-3 max-md:text-lg max-md:shadow-lg

              max-md:shadow-primarycolor/20
              "
        >
          {buttonTitle}
        </button>
      </Link>
    </div>
  )
}

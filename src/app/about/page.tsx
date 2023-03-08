'use client'

import { ContentAbout } from './components/ContentAbout'

export default function Page() {
  return (
    <main
      className="mt-40 flex h-screen items-start justify-center
    
    gap-10
    "
    >
      <ContentAbout
        heading="About"
        description1="
        🙋 Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam.Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
        description2="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam.Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
        description3="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam.Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
        description4="Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam.Lorem ipsum dolor sit amet. Et earum quisquam culpa dolorem ipsum dolor sit amet. Et earum quisquam."
      />
    </main>
  )
}

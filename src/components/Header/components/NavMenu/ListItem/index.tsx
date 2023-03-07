import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { ReactNode } from 'react'

type PropsTeste = {
  title: string
  forwardedRef?: string
  children: ReactNode
  href: string
}

export function ListItem({
  children,
  title,
  forwardedRef,
  ...props
}: PropsTeste) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className="focus:shadow-[0_0_0_1px] focus:shadow-primarycolor hover:bg-charthover bg-chartbox/50 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
          {...props}
          ref={forwardedRef}
        >
          <div className="text-heading mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-description leading-[1.4]">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

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
          className="block select-none rounded-[6px] bg-chartbox/50 p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_1px] focus:shadow-primarycolor hover:bg-charthover"
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-heading">
            {title}
          </div>
          <p className="leading-[1.4] text-description">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

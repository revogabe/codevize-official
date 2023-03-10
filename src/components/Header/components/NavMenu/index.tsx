import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { ListItem } from './ListItem'
import Link from 'next/link'

export function NavMenu() {
  return (
    <NavigationMenu.Root className="relative flex w-full justify-end max-md:justify-start">
      <NavigationMenu.List className="m-0 flex w-full list-none justify-end rounded-[6px] p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-heading outline-none focus:shadow-[0_0_0_2px] focus:shadow-info500 hover:bg-slate-400/10">
            Projects{' '}
            <CaretDownIcon
              className="relative top-[1px] text-heading transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className=" absolute top-0 left-0 z-30 flex w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight lg:w-auto">
            <ul className="one m-0 grid list-none gap-2 gap-x-[10px] p-[22px] lg:w-[500px] lg:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <Link href="/">
                  <NavigationMenu.Link
                    asChild
                    className="bg-gradient-to-b from-endgradient to-startgradient transition-all duration-200 ease-out hover:shadow-[0_0_0_2px]
                  hover:shadow-primarycolor hover:brightness-150"
                  >
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-[6px] p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-primarycolor "
                      href=""
                    >
                      <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                        Codevize Home
                      </div>
                      <p className="text-[14px] leading-[1.3] text-description">
                        A collection of projects built by Codevize
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </Link>
              </li>
              <Link href="/projects">
                <ListItem href="" title="Projects">
                  A collection of projects built by Codevize
                </ListItem>
              </Link>
              <Link href="/about">
                <ListItem href="" title="About">
                  Read more about Codevize
                </ListItem>
              </Link>
              <Link href="/blog">
                <ListItem href="" title="Blog">
                  Read our blog
                </ListItem>
              </Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-heading outline-none focus:shadow-[0_0_0_2px] focus:shadow-info500 hover:bg-slate-400/10">
            Contact{' '}
            <CaretDownIcon
              className="relative top-[1px] text-heading transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full lg:w-auto">
            <ul className="m-0 grid list-none gap-2 gap-x-[10px] p-[22px] lg:w-[600px] lg:grid-flow-col lg:grid-rows-3">
              <ListItem
                title="Linkedin Daniel"
                href="https://www.linkedin.com/in/daniel-gabriel-70a565267/"
                targetBlank="_blank"
              >
                Daniel Linkedin profile page for more information
              </ListItem>
              <ListItem
                title="Linkedin Kelvin"
                href="https://www.linkedin.com/in/kelvin-quid%C3%A1-44b563163/"
                targetBlank="_blank"
              >
                Kelvin Linkedin profile page for more information
              </ListItem>
              <ListItem
                title="Github Daniel"
                href="https://github.com/revogabe"
                targetBlank="_blank"
              >
                Daniel Github profile page for more information
              </ListItem>
              <ListItem
                title="Github Kelvin"
                href="https://github.com/kazz2433"
                targetBlank="_blank"
              >
                Kelvin Github profile page for more information
              </ListItem>
              <ListItem
                title="Twitter Codevize"
                href="https://twitter.com/codevize"
                targetBlank="_blank"
              >
                Twitter Codevize profile page for more information
              </ListItem>
              <ListItem
                title="Instagram Codevize"
                href="https://www.instagram.com/codevizee/"
                targetBlank="_blank"
              >
                Instagram Codevize profile page for more information
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="max-[540px]:hidden">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-heading no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-info500 hover:bg-slate-400/10"
            href="https://github.com/revogabe/codevize-official"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-info100" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-end">
        <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-chartbg shadow-xl shadow-black/50 transition-[width,_height] duration-300 data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut lg:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}

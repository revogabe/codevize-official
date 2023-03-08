import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { ListItem } from './ListItem'

export function NavMenu() {
  return (
    <NavigationMenu.Root className="relative flex w-full justify-end max-md:justify-start">
      <NavigationMenu.List className="m-0 flex w-full list-none justify-end rounded-[6px] p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-heading outline-none focus:shadow-[0_0_0_2px] focus:shadow-info500 hover:bg-slate-400/10">
            Learn{' '}
            <CaretDownIcon
              className="relative top-[1px] text-heading transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className=" absolute top-0 left-0 z-30 flex w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight lg:w-auto">
            <ul className="one m-0 grid list-none gap-2 gap-x-[10px] p-[22px] lg:w-[500px] lg:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link
                  asChild
                  className="bg-gradient-to-b from-endgradient to-startgradient transition-all duration-200 ease-out hover:shadow-[0_0_0_2px]
                  hover:shadow-primarycolor hover:brightness-150"
                >
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-[6px] p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-primarycolor "
                    href="/"
                  >
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Radix Primitives
                    </div>
                    <p className="text-[14px] leading-[1.3] text-description">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-heading outline-none focus:shadow-[0_0_0_2px] focus:shadow-info500 hover:bg-slate-400/10">
            Overview{' '}
            <CaretDownIcon
              className="relative top-[1px] text-heading transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full lg:w-auto">
            <ul className="m-0 grid list-none gap-2 gap-x-[10px] p-[22px] lg:w-[600px] lg:grid-flow-col lg:grid-rows-3">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem
                title="Styling"
                href="/docs/primitives/overview/styling"
              >
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/overview/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-heading no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-info500 hover:bg-slate-400/10"
            href="https://github.com/radix-ui"
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

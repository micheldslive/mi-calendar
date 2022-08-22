import { controls, systems } from '@/mocks/navItems'

import NavButtons from './NavButtons'

const Nav = () => {
  return (
    <nav className="mt-5 flex w-full flex-col items-start justify-between overflow-y-scroll scrollbar xl:h-full">
      <div className="w-full flex-col justify-center lg:flex">
        <NavButtons item={controls} />
      </div>

      <div className="mt-5 flex w-full flex-col justify-between">
        <div className="mt-5 flex w-full flex-col justify-between">
          <div className="w-full flex-col justify-center gap-y-5 lg:flex">
            <NavButtons item={systems} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

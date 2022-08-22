import { Hamburguer } from '@/components/Hamburguer'
import { Logo } from '@/components/Logo'

import { CreateEventButton } from './CreateEventButton'
import HeaderDate from './Date'
import { ProfileButton } from './ProfileButton'
import { SearchForm } from './SearchForm'

export const Header = () => {
  return (
    <header className="flex w-full flex-row border-b border-slate-300 p-10">
      <nav className="flex w-full flex-wrap items-center justify-center gap-5 xl:justify-between">
        <div className="flex gap-4">
          <Hamburguer />
          <Logo />
        </div>
        <HeaderDate />
        <div className="flex flex-wrap items-center justify-center gap-2 xl:justify-end">
          <CreateEventButton />
          <SearchForm />
          <ProfileButton />
        </div>
      </nav>
    </header>
  )
}

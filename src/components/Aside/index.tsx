import classNames from 'classnames'
import { memo } from 'react'

import { useStateContext } from '@/context/StateContext'

import Nav from './Nav'

const Aside = () => {
  const { menu } = useStateContext()

  return (
    <aside
      className={classNames(
        'nav absolute xl:relative mr-8 flex h-full w-80 flex-col items-center self-start border-r border-slate-300 bg-primary p-5',
        menu && 'nav-close'
      )}
    >
      <Nav />
    </aside>
  )
}

export default memo(Aside)

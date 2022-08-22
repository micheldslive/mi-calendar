import classNames from 'classnames'
import Link from 'next/link'
import { useMemo } from 'react'

import { useStateContext } from '@/context/StateContext'
import { INavButtons } from '@/core/types'
import Svg from '@/Images'

export default function NavButtons({ item }: INavButtons) {
  const { selected, setSelected } = useStateContext()

  const renderItems = useMemo(() => {
    return item.map((item) => (
      <span
        key={item.name}
        className={classNames(
          'group mt-2 flex w-full cursor-pointer items-center justify-start gap-x-3 rounded-lg p-3 transition-colors hover:bg-navHover',
          item.name === selected.name && 'bg-navHover'
        )}
        onClick={() => {
          setSelected(item)
        }}
      >
        <div style={{ minWidth: '26px' }} className="flex items-center">
          <Svg name={item.icon} width={24} height={24} alt={item.name} />
        </div>
        <Link href={item.href}>
          <a className={'menu-hide'}>
            <small className="font-medium">{item.name}</small>
          </a>
        </Link>
      </span>
    ))
  }, [item, selected, setSelected])
  return <>{renderItems}</>
}

import { useRouter } from 'next/router'

import { LogoCalendar } from '@/Images'

export const Logo = () => {
  const { push } = useRouter()

  return (
    <button
      onClick={() => push('/')}
      className="flex items-center rounded-lg p-4 transition-colors hover:bg-navHover"
    >
      <LogoCalendar />
    </button>
  )
}

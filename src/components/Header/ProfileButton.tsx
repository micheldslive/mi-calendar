import { Profile } from '@/Images'

export const ProfileButton = () => {
  return (
    <span className="ml-4 hidden flex-row gap-x-4 xl:flex">
      <button className="flex items-center rounded-lg bg-search p-4 transition-colors hover:bg-navHover">
        <Profile />
      </button>
    </span>
  )
}

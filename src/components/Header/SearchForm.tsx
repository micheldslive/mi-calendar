import { useStateContext } from '@/context/StateContext'
import { Search } from '@/Images/'

export const SearchForm = () => {
  const { setSearch } = useStateContext()

  return (
    <form className="ml-4 flex w-80">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search />
        </div>
        <input
          type="search"
          className="block w-full rounded-lg bg-search p-4 pl-10 text-sm font-normal text-navTitle"
          placeholder="Search task, event, calendar"
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </div>
    </form>
  )
}

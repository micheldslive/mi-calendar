import { EventForm } from '@/components/EventForm'
import { useStateContext } from '@/context/StateContext'

export const CreateEventButton = () => {
  const { setModal } = useStateContext()

  return (
    <button
      onClick={() => {
        setModal({
          open: true,
          title: <p>Create Event</p>,
          body: <EventForm />
        })
      }}
      className="group rounded-lg bg-button py-2 px-4 transition-colors hover:opacity-80"
    >
      <p className="text-sm font-normal text-eventBtn group-hover:text-textHover">
        + Create event
      </p>
    </button>
  )
}

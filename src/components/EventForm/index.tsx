import { SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { useEventsContext } from '@/context/EventsContext'
import { useStateContext } from '@/context/StateContext'
import { IEvents } from '@/core/types'
import { EventTypes } from '@/mocks/dataResouces'

interface IEventForm {
  event?: IEvents
}

export const EventForm = ({ event }: IEventForm) => {
  const { updateEventStorage, removeEventStorage, saveEventStorage } =
    useEventsContext()
  const { setModal } = useStateContext()
  const { register, handleSubmit } = useForm<IEvents>()
  const onSubmit: SubmitHandler<IEvents> = (data) => {
    if (event) {
      updateEventStorage(data)
    } else {
      saveEventStorage(data)
    }
    setModal({ open: false })
  }
  return (
    <div className="flex w-full justify-center bg-primary p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <input
          {...register('id')}
          id="id"
          type="hidden"
          value={event?.id || uuidv4()}
        />
        <label htmlFor="title" className="text-sm font-medium">
          Title:
        </label>
        <input
          {...register('title', { required: true })}
          type="text"
          defaultValue={event?.title}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="description" className="text-sm font-medium">
          Description:
        </label>
        <input
          {...register('description', { required: true })}
          type="text"
          defaultValue={event?.description}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="date" className="text-sm font-medium">
          Date:
        </label>
        <input
          {...register('date', { required: true })}
          type="date"
          defaultValue={event?.date}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="time" className="text-sm font-medium">
          Start at:
        </label>
        <input
          {...register('startDate', { required: true })}
          type="time"
          defaultValue={event?.startDate}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="time" className="text-sm font-medium">
          End at:
        </label>
        <input
          {...register('endDate', { required: true })}
          type="time"
          defaultValue={event?.endDate}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="type" className="text-sm font-medium">
          Type of:
        </label>
        <select
          {...register('type', { required: true })}
          id="type"
          defaultValue={event?.type}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        >
          {EventTypes.map(({ id, text }) => (
            <option key={id.toString()} value={id}>
              {text}
            </option>
          ))}
        </select>
        {event ? (
          <span className="flex flex-row gap-x-2">
            <button className="mt-3 flex flex-1 justify-center rounded-lg bg-navHover py-2 px-4 text-primary transition-colors hover:bg-secondary hover:text-textHover">
              Update
            </button>
            <button
              className="mt-3 flex rounded-lg bg-deleteBtn py-2 px-4 transition-colors hover:bg-deleteBtnHover hover:text-secondary"
              onClick={(e) => {
                e.preventDefault()
                removeEventStorage(event.id)
                setModal({ open: false })
              }}
            >
              Delete
            </button>
          </span>
        ) : (
          <button className="mt-3 rounded-lg bg-navHover py-2 px-4 text-primary transition-colors hover:bg-secondary hover:text-textHover">
            Create
          </button>
        )}
      </form>
    </div>
  )
}

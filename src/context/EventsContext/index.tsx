import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { CRUD, LocalStorage } from '@/core/methods'
import { IChildren, IEvents, IEventsContext } from '@/core/types'

const defaultEvents: IEventsContext = {
  events: [],
  setEvents: () => [],
  saveEventStorage: () => null,
  removeEventStorage: () => null,
  updateEventStorage: () => null
}

const EventsContext = createContext(defaultEvents)

const useEventsContext = () => useContext(EventsContext)

const EventProvider = ({ children }: IChildren) => {
  const [events, setEvents] = useState<IEvents[]>([])

  const key = 'events'
  const local = LocalStorage()
  const crud = CRUD()

  const saveEventStorage = (event: IEvents) => {
    const saveEvent = crud.add(events, event)
    local.set(key, JSON.stringify(saveEvent))
    setEvents(saveEvent)
    toast.success(`Event "${event.title}" created!`)
  }

  const removeEventStorage = (id: string) => {
    const remove = crud.remove(events, id)
    local.set(key, JSON.stringify(remove))
    setEvents(remove)
    toast.success(`Event removed!`)
  }

  const updateEventStorage = (event: IEvents) => {
    const update = crud.update(event, events)
    local.set(key, JSON.stringify(update))
    setEvents(update)
    toast.success(`Event "${event.title}" updated!`)
  }

  useEffect(() => {
    const getItems = local.get(key)
    setEvents(getItems)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setEvents])

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        saveEventStorage,
        removeEventStorage,
        updateEventStorage
      }}
    >
      {children}
    </EventsContext.Provider>
  )
}

export { EventProvider, useEventsContext }

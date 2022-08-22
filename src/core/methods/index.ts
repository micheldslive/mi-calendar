import { IEvents } from '@/core/types'

export const LocalStorage = () => {
  const get = (key: string) => {
    const getItem = localStorage.getItem(key)
    const response: IEvents[] = getItem ? JSON.parse(getItem) : []

    return response
  }

  const set = (key: string, data: string) => {
    localStorage.setItem(key, data)
  }

  return { get, set }
}

export const CRUD = () => {
  const add = (events: IEvents[], event: IEvents) => {
    return [...events, event]
  }
  const remove = (events: IEvents[], eventId: string) => {
    return events.filter(({ id }) => id !== eventId)
  }

  const update = (event: IEvents, events: IEvents[]) => {
    return [event, ...events.filter(({ id }) => id !== event.id)]
  }

  return { add, update, remove }
}

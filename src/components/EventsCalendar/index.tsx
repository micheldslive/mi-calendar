import { StrictMode, useEffect, useState } from 'react'

import Aside from '@/components/Aside'
import { ScheduleView } from '@/components/ScheduleTable'
import { useEventsContext } from '@/context/EventsContext'

import { CalendarComponent } from './Calendar'
import { EventCard } from './EventCard'
import { SchedulerDateTime } from '@devexpress/dx-react-scheduler'

export const EventsCalendar = () => {
  const [avoidHydration, setAvoidHydration] = useState(false)
  const [currentDate, setCurrentDate] = useState<SchedulerDateTime>(new Date())
  const { events } = useEventsContext()

  function getDate(date: Date | string) {
    setCurrentDate(new Date(date))
  }

  useEffect(() => {
    setAvoidHydration(true)
  }, [])

  return (
    <section className="flex w-full flex-col items-center xl:w-fit xl:flex-row xl:items-start">
      <Aside />
      <div className="w-80 py-8">
        {avoidHydration && <CalendarComponent getDate={getDate} />}
        <div className="mt-7 flex w-full flex-col">
          <p className="mb-3">Events</p>

          <div className="h-22 flex w-full flex-col overflow-y-auto py-4 scrollbar-thin">
            {events?.length ? (
              events.map((event) => (
                <StrictMode key={event.id.toString()}>
                  <EventCard {...event} />
                </StrictMode>
              ))
            ) : (
              <p className="p-4">Nothing to show</p>
            )}
          </div>
        </div>
      </div>
      <div className="mx-8 flex w-full overflow-y-auto py-8 scrollbar-thin scrollbar-thumb-transparent xl:flex-1">
        <ScheduleView
          events={events?.map(({ title, date, startDate, endDate, type }) => ({
            startDate: new Date(`${date} ${startDate}`),
            endDate: new Date(`${date} ${endDate}`),
            title,
            type
          }))}
          currentDate={currentDate}
        />
      </div>
    </section>
  )
}

import { EventsCalendar } from '@/components/EventsCalendar'
import { Header } from '@/components/Header'
import Meta from '@/layout'
import Main from '@/template'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="mi-calendar"
          description="Mi-Calendar front-end challange"
        />
      }
    >
      <main className="flex w-full flex-col bg-primary scrollbar">
        <Header />
        <div className="flex w-full flex-1 flex-row bg-primary">
          <EventsCalendar />
        </div>
      </main>
    </Main>
  )
}

export default Index

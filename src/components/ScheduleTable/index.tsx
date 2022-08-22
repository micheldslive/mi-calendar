import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Appointments,
  DayView,
  Resources,
  Scheduler
} from '@devexpress/dx-react-scheduler-material-ui'
import Paper from '@mui/material/Paper'

import { useStateContext } from '@/context/StateContext'
import { ISchedulerView } from '@/core/types'
import { resources } from '@/mocks/dataResouces'

export const ScheduleView = ({ events, currentDate }: ISchedulerView) => {
  const { search } = useStateContext()

  const filtered = events.filter(({ title }) =>
    title?.toLocaleLowerCase().includes(search?.toLocaleLowerCase())
  )

  return (
    <Paper>
      <Scheduler data={filtered}>
        <ViewState currentDate={currentDate} />
        <DayView startDayHour={8} endDayHour={18} />
        <Appointments />
        <Resources data={resources} />
      </Scheduler>
    </Paper>
  )
}

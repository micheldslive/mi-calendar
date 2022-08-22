import 'react-calendar/dist/Calendar.css'
import '@/styles/global.css'
import '@/styles/typography.css'
import 'react-toastify/dist/ReactToastify.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

import { ModalContent } from '@/components/Modal'
import { EventProvider } from '@/context/EventsContext'
import { StateProvider } from '@/context/StateContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider forcedTheme={'light'}>
      <EventProvider>
        <StateProvider>
          <Component {...pageProps} />
          <ModalContent />
          <ToastContainer className="text-sm" />
        </StateProvider>
      </EventProvider>
    </ThemeProvider>
  )
}

export default MyApp

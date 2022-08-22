import { memo, ReactNode } from 'react'

type IMain = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMain) => (
  <>
    {props.meta}
    {props.children}
  </>
)

export default memo(Main)

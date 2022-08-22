import { useStateContext } from '@/context/StateContext'
import Burguer from '@/public/img/burguer.svg'

export const Hamburguer = () => {
  const { menu, setMenu } = useStateContext()

  return (
    <button onClick={() => setMenu(!menu)}>
      <Burguer />
    </button>
  )
}

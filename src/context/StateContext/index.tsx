import React, { createContext, useContext, useReducer } from 'react'

import {
  IChildren,
  IItem,
  IModal,
  IStateContext,
  IValuesContext,
  TActionContext
} from '@/core/types'

const initialState: IStateContext = {
  search: '',
  menu: true,
  modal: {
    title: undefined,
    body: undefined,
    open: false
  },
  selected: {
    name: 'Agenda',
    href: '/'
  }
}

const contextState: IValuesContext = {
  ...initialState,
  setSelected: () => {},
  setSearch: () => '',
  setMenu: () => true,
  setModal: () => false
}

const StateContext = createContext(contextState)

const useStateContext = () => useContext(StateContext)

export const reducer = (state: IStateContext, action: TActionContext) => {
  switch (action.type) {
    case 'search':
      return { ...state, search: action.search }
    case 'menu':
      return { ...state, menu: action.menu }
    case 'modal':
      return { ...state, modal: action.modal }
    case 'selected':
      return { ...state, selected: action.selected }
    default:
      return state
  }
}

const StateProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setSearch = (search: string) => {
    dispatch({ type: 'search', search })
  }

  const setMenu = (menu: boolean) => {
    dispatch({ type: 'menu', menu })
  }

  const setModal = (modal: IModal) => {
    dispatch({ type: 'modal', modal })
  }

  const setSelected = (selected: Omit<IItem, 'icon'>) => {
    dispatch({ type: 'selected', selected })
  }

  return (
    <StateContext.Provider
      value={{ ...state, setSearch, setMenu, setModal, setSelected }}
    >
      {children}
    </StateContext.Provider>
  )
}

export { StateProvider, useStateContext }

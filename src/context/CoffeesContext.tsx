import {
  useState,
  useEffect,
  useReducer,
  createContext,
  ReactNode,
} from 'react'

import { Coffee, SelectedCoffee, coffeesReducer } from '@/reducers/reducer'
import {
  addCoffeeAction,
  removeCoffeeAction,
  updateCoffeeQuantityAction,
} from '@/reducers/actions'

interface CoffeesContextType {
  coffees: SelectedCoffee[]
  finalPrice: number
  totalNumberOfCoffees: number
  addCoffeeQuantity: (coffeeId: number) => void
  subtractCoffeeQuantity: (coffeeId: number) => void
  addCoffeeToCart: (coffee: Coffee, quantity: number) => void
  removeCoffeeFromCart: (coffeeId: number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
      totalNumberOfCoffees: 0,
    },
    (initialState) => {
      return initialState
    },
  )

  const [totalNumberOfCoffees, setTotalNumberOfCoffees] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)

  const { coffees } = coffeesState

  useEffect(() => {
    const price = coffees.reduce((accumulator, coffee) => {
      return accumulator + coffee.quantity * Number(coffee.price)
    }, 0)

    const quantity = coffees.reduce((accumulator, coffee) => {
      return accumulator + coffee.quantity
    }, 0)

    setFinalPrice(+price.toFixed(2))
    setTotalNumberOfCoffees(quantity)
  }, [coffees])

  function addCoffeeToCart(coffee: Coffee, quantity: number) {
    dispatch(addCoffeeAction(coffee, quantity))
  }

  function addCoffeeQuantity(coffeeId: number) {
    dispatch(updateCoffeeQuantityAction(coffeeId, 'ADD'))
  }

  function subtractCoffeeQuantity(coffeeId: number) {
    dispatch(updateCoffeeQuantityAction(coffeeId, 'SUBTRACT'))
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        totalNumberOfCoffees,
        finalPrice,
        addCoffeeQuantity,
        subtractCoffeeQuantity,
        addCoffeeToCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Coffee {
  id: number
  image: string
  title: string
  description: string
  price: string
  tags: string[]
}

export interface SelectedCoffee extends Coffee {
  quantity: number
}

interface CoffeesReducerState {
  coffees: SelectedCoffee[]
}

interface CoffeesReducerAction {
  type: ActionTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

export function coffeesReducer(
  state: CoffeesReducerState,
  action: CoffeesReducerAction,
) {
  const { coffees } = state
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ADD_COFFEE: {
      const coffee: Coffee = payload.coffee
      const coffeeIndex = coffees.findIndex((item) => item.id === coffee.id)

      if (coffeeIndex < 0) {
        const selectedCoffee: SelectedCoffee = {
          ...coffee,
          quantity: payload.quantity,
        }

        return produce(state, (draft) => {
          draft.coffees.push(selectedCoffee)
        })
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].quantity += payload.quantity
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const coffeeIndex = coffees.findIndex(
        (item) => item.id === payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffees.splice(coffeeIndex, 1)
      })
    }

    case ActionTypes.UPDATE_COFFEE_QUANTITY: {
      const coffeeIndex = coffees.findIndex(
        (item) => item.id === payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      if (payload.operation === 'ADD') {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex].quantity += 1
        })
      } else if (payload.operation === 'SUBTRACT') {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex].quantity -= 1
        })
      } else {
        return state
      }
    }

    default:
      return state
  }
}

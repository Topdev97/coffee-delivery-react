import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
}

export function addCoffeeAction(coffee: Coffee, quantity: number) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffee,
      quantity,
    },
  }
}

export function removeCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}

export function updateCoffeeQuantityAction(
  coffeeId: number,
  operation: 'ADD' | 'SUBTRACT',
) {
  return {
    type: ActionTypes.UPDATE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
      operation,
    },
  }
}

import espresso from '@/assets/coffees/espresso.svg'
import americano from '@/assets/coffees/americano.svg'
import creamyEspresso from '@/assets/coffees/creamy-espresso.svg'
import coldEspresso from '@/assets/coffees/cold-espresso.svg'
import coffeeAndMilk from '@/assets/coffees/coffee-and-milk.svg'
import latte from '@/assets/coffees/latte.svg'
import capuccino from '@/assets/coffees/capuccino.svg'
import macchiato from '@/assets/coffees/macchiato.svg'
import mochaccino from '@/assets/coffees/mochaccino.svg'
import hotChocolate from '@/assets/coffees/hot-chocolate.svg'
import cubano from '@/assets/coffees/cubano.svg'
import hawaian from '@/assets/coffees/hawaian.svg'
import arabic from '@/assets/coffees/arabic.svg'
import irish from '@/assets/coffees/irish.svg'

export interface Coffee {
  id: number
  image: string
  title: string
  description: string
  price: string
  tags: string[]
}

export const coffees: Coffee[] = [
  {
    id: 0,
    image: espresso,
    title: 'Traditional Espresso',
    description: 'Traditional coffee made with hot water and coffee beans',
    price: '9.90',
    tags: ['TRADITIONAL'],
  },
  {
    id: 1,
    image: americano,
    title: 'Americano Espresso',
    description: 'Diluted espresso, less intense than the traditional',
    price: '9.90',
    tags: ['TRADITIONAL'],
  },
  {
    id: 2,
    image: creamyEspresso,
    title: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    price: '9.90',
    tags: ['TRADITIONAL'],
  },
  {
    id: 3,
    image: coldEspresso,
    title: 'Cold Espresso',
    description: 'Beverage prepared with espresso and ice cubes',
    price: '9.90',
    tags: ['TRADITIONAL', 'COLD'],
  },
  {
    id: 4,
    image: coffeeAndMilk,
    title: 'Coffee and Milk',
    description: 'Half traditional espresso, half evaporated milk',
    price: '9.90',
    tags: ['TRADITIONAL', 'WITH MILK'],
  },
  {
    id: 5,
    image: latte,
    title: 'Latte',
    description: 'Espresso, milk, and creamy foam',
    price: '9.90',
    tags: ['TRADITIONAL', 'WITH MILK'],
  },
  {
    id: 6,
    image: capuccino,
    title: 'Capuccino',
    description: 'Equal doses of coffee, milk, and foam, plus cinnamon',
    price: '9.90',
    tags: ['TRADITIONAL', 'WITH MILK'],
  },
  {
    id: 7,
    image: macchiato,
    title: 'Macchiato',
    description: 'Espresso with a touch of hot milk and foam',
    price: '9.90',
    tags: ['TRADITIONAL', 'WITH MILK'],
  },
  {
    id: 8,
    image: mochaccino,
    title: 'Mochaccino',
    description: 'Espresso shot with chocolate broth, some milk and foam',
    price: '9.90',
    tags: ['TRADITIONAL', 'WITH MILK'],
  },
  {
    id: 9,
    image: hotChocolate,
    title: 'Hot Chocolate',
    description: 'Beverage made with chocolate, milk, and coffee',
    price: '9.90',
    tags: ['SPECIAL', 'WITH MILK'],
  },
  {
    id: 10,
    image: cubano,
    title: 'Cubano',
    description: 'Cold espresso beverage with rum, milk cream, and mint',
    price: '9.90',
    tags: ['SPECIAL', 'ALCOHOLIC', 'COLD'],
  },
  {
    id: 11,
    image: hawaian,
    title: 'Hawaian',
    description: 'Sweet beverage with coffee and coconut milk',
    price: '9.90',
    tags: ['SPECIAL'],
  },
  {
    id: 12,
    image: arabic,
    title: 'Arabic',
    description: 'Beverage made with arabic coffee beans and spices',
    price: '9.90',
    tags: ['SPECIAL'],
  },
  {
    id: 13,
    image: irish,
    title: 'Irish',
    description: 'Coffee, Irish whisky, sugar and whipped cream',
    price: '9.90',
    tags: ['SPECIAL', 'ALCOHOLIC'],
  },
]

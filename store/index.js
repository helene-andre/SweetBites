import Vue from 'vue'
import candies from '~/static/candies.json'

const candiesMap = candies.reduce((acc, item, i) => { acc[item.id] = i; return acc }, {})

export const state = () => ({
  candies,
  candiesMap,
  cart: []
})

export const mutations = {
  initCart: (state) => {
    const sessionStorageCart = (sessionStorage.cart && JSON.parse(sessionStorage.cart)) || []
    sessionStorageCart.forEach((itemId) => {
      const candy = { ...candies[candiesMap[itemId]], quantity: 1 }

      const itemInCartIndex = state.cart.findIndex(item => item.id === itemId)
      if (itemInCartIndex > -1) state.cart[itemInCartIndex].quantity++
      else state.cart.push(candy)
    })
  },

  addToCart: (state, candy) => {
    const itemInCartIndex = state.cart.findIndex(item => item.id === candy.id)
    if (itemInCartIndex > -1) state.cart[itemInCartIndex].quantity++
    else state.cart.push({ ...candy, quantity: 1 })

    const sessionStorageCart = (sessionStorage.cart && JSON.parse(sessionStorage.cart)) || []
    sessionStorageCart.push(candy.id)
    sessionStorage.cart = JSON.stringify(sessionStorageCart)
  }
}

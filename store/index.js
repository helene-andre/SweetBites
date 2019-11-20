import products from '~/static/products.json'

const productsMap = products.reduce((acc, item, i) => { acc[item.slug] = i; return acc }, {})

export const state = () => ({
  products,
  productsMap,
  cart: [],
  total: 0
})

export const mutations = {
  initCart: (state) => {
    const sessionStorageCart = (sessionStorage.cart && JSON.parse(sessionStorage.cart)) || []
    sessionStorageCart.forEach((itemSlug) => {
      const product = { ...products[productsMap[itemSlug]], quantity: 1 }

      const itemInCartIndex = state.cart.findIndex(item => item.slug === itemSlug)

      if (itemInCartIndex > -1) state.cart[itemInCartIndex].quantity++
      else state.cart.push(product)
    })
  },

  removeFromCart: (state, product) => {
    const itemInCartIndex = state.cart.findIndex(item => item.slug === product.slug)
    if (product.quantity > 1) state.cart[itemInCartIndex].quantity--
    else state.cart = state.cart.filter(item => item.slug !== product.slug)

    let sessionStorageCart = (sessionStorage.cart && JSON.parse(sessionStorage.cart)) || []
    sessionStorageCart = []
    state.cart.forEach(function (item) {
      for (let i = 0; i < item.quantity; i++) sessionStorageCart.push(item.slug)
    })

    sessionStorage.cart = JSON.stringify(sessionStorageCart)
  },

  addToCart: (state, product) => {
    const itemInCartIndex = state.cart.findIndex(item => item.slug === product.slug)
    if (itemInCartIndex > -1) state.cart[itemInCartIndex].quantity++
    else state.cart.push({ ...product, quantity: 1 })

    const sessionStorageCart = (sessionStorage.cart && JSON.parse(sessionStorage.cart)) || []
    sessionStorageCart.push(product.slug)

    sessionStorage.cart = JSON.stringify(sessionStorageCart)
  },

  calculateTotal: (state) => {
    state.total = 0
    state.cart.forEach(function (item) {
      state.total += (item.quantity * item.price)
    })
  }
}

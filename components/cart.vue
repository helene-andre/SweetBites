<template lang="pug">
.cart
  ul.cart__list(v-if="cart.length")
    li(v-for="(item, i) in cart" :key="i").cart__item
      img.cart__item-image(:src="getImage(`products/${item.src}.jpg`)")
      | {{ item.name }}
      | x {{ item.quantity }}
      span
        span.cart__item-remove(@click="removeFromCart(item)" title="remove") #[strong -]
        span.cart__item-add(@click="addToCart(item)" title="add") #[strong +]
      span x {{ item.price }} $
      span x {{ item.price*item.quantity }} $
    span Total {{ cartItemsCount }}
  p(v-else) There's nothing in your cart yet.

  nuxt-link.nav__link(v-if="isNavBar" to="/cart")
    button See your cart

</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    isNavBar: { type: Boolean }
  },

  mounted () {
    this.$store.commit('initCart')
  },

  methods: {
    getImage: image => require(`~/assets/images/${image}`),

    addToCart (product) {
      this.$store.commit('addToCart', product)
    },

    removeFromCart (product) {
      this.$store.commit('removeFromCart', product)
    }
  },

  computed: {
    ...mapState(['products', 'productsMap', 'cart']),
    cart () {
      return this.$store.state.cart || []
    },
    cartItemsCount () {
      return this.cart.reduce((total, item) => (total += item.quantity), 0)
    }
  }
}
</script>

<style lang="scss">
.cart-wrapper {
  position: relative;
  padding-bottom: 0.6em;
}

.cart {
  &__list {width: 50%;}
  &__item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &__item-image {
    height: 40px;
    width: 40px;
    margin-right: 6px;
  }
  &__item-remove {padding-left: 16px;}
  &__item-add {padding-left: 16px;}
}

// Style if cart component called in the nav bar.
.nav .cart {
  width: auto;
  position: absolute;
  right: 10px;
  top: 100%;
  padding: 1em;
  border: 1px solid #eee;
  background-color: rgba(#fff, 0.9);
  transition: 0.3s ease-in-out;
  transform:  translateY(-1em);
  z-index: -1;
  opacity: 0;
  &__item {
    width: max-content;
    font-size: 0.9em;
    font-style: italic;
  }
}
.cart-wrapper:hover .cart {
  z-index: 1;
  opacity: 1;
  transform: translate(0);
}

.cart-wrapper:hover .cart:before,
.cart-wrapper:hover .cart:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  right: 13px;
  bottom: 100%;
  margin-left: -10px;
  border: 10px solid transparent;
  border-bottom-color: #eee;
}

.cart-wrapper:hover .cart:after {
  border-bottom-color: #fff;
  margin-bottom: -1px;
}

</style>

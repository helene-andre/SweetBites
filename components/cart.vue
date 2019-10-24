<template lang="pug">
.cart
  ul.cart__list(v-if="cart.length")
    li(v-for="(item, i) in cart" :key="i").cart__item
      | {{ item.name }}
      | x{{ item.quantity }}
      span(@click="addToCart(item)") +
      span(@click="removeFromCart(item)") -
  p(v-else) There's nothing in your cart yet.

  nuxt-link.nav__link(v-if="isNavBar" to="/cart") See your cart

</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    isNavBar: { type: Boolean }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('addToCart', product)
    },
    removeFromCart (product) {
      this.$store.commit('removeFromCart', product)
    }
  },

  mounted () {
    this.$store.commit('initCart')
  },

  computed: {
    ...mapState(['products', 'productsMap']),
    cart () {
      return this.$store.state.cart || []
    }
  }
}
</script>

<style lang="scss">
.cart-wrapper {
  position: relative;
  padding-bottom: 0.6em;
}

.nav .cart {
  position: absolute;
  left: 50%;
  top: 100%;
  padding: 1em;
  border: 1px solid #eee;
  background-color: rgba(#fff, 0.8);
  transition: 0.3s ease-in-out;
  transform:  translate(-50%, -1em);
  z-index: -1;
  opacity: 0;

  &__list {
    width: 150px;
  }
  &__item {
    font-size: 0.6em;
  }
}
.cart-wrapper:hover .cart {
  z-index: 1;
  opacity: 1;
  transform: translate(-50%, 0);
}

.cart-wrapper:hover .cart:before,
.cart-wrapper:hover .cart:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
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

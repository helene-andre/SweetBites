<template lang="pug">
header.header
  nuxt-link.logo.title(to="/") CandyBar
  nav
    ul.nav
      li
        nuxt-link.nav__link(to="/") Home
      li
        nuxt-link.nav__link(to="/about") About
      li
        nuxt-link.nav__link(to="/boutique") Boutique
      li
        nuxt-link.nav__link(to="/contact") Contact
      li.cart-wrapper
        span.icon.i-add-to-cart.cart__icon
        span.cart__item-count(v-if="cartItemsCount > 0") {{ cartItemsCount }}
        cart(:is-nav-bar="isNavBar")

</template>

<script>
import { mapState } from 'vuex'
import Cart from '@/components/cart'

export default {
  data: () => ({
    isNavBar: true
  }),

  components: { Cart },

  computed: {
    ...mapState(['cart']),
    cartItemsCount () {
      return this.cart.reduce((total, item) => (total += item.quantity), 0)
    }
  }
}
</script>

<style lang="scss">
header.header {
  display: grid;
  grid-template-columns: repeat(2,auto);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.logo.title {font-size: 1.8em;}

.logo, li a, .nav > li {
  padding: 1em 2em;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #000;
  font-size: .9em;
}

nav {justify-self: right;}
ul {list-style-type: none;}
.nav > li {display: inline;}

li a, li span {
  font-family: 'Indie Flower';
  padding: 1em 2em;
  display: inline-block;
}

.cart__icon {font-size: 1.5em;}

.cart__item-count {
  height: 12px;
  width: 12px;
  padding: 0;
  margin: 0;
  position: relative;
  top: -23px;
  right: 57px;
  font-size: 12px;
}

</style>

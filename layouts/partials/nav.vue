<template lang="pug">
header
  .nav
    .nav__title
      nuxt-link(to="/") Sweet Bites
    .spacer
    ul.nav__menu
      li.nav__menu-item
        nuxt-link(to="/") Home
      li.nav__menu-item
        nuxt-link(to="/about") About
      li.nav__menu-item
        nuxt-link(to="/boutique") Boutique
      li.nav__menu-item
        nuxt-link(to="/contact") Contact
      li.nav__menu-item.cart-wrapper
        span.cart__item-count(v-if="cartItemsCount > 0") {{ cartItemsCount }}
        span.icon.i-add-to-cart.cart__icon
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
.nav {
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  align-items: baseline;
  background-color: rgba(255, 255, 255, 0.9);
  font-family: "Indie Flower", Arial, Helvetica, sans-serif;
  z-index: 100;

  &__title {
    height: 100%;
    font-size: 2em;
    color: #f37285;
    padding: 20px 0 0 20px;
    text-transform: uppercase;
  }

  &__menu {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__menu-item {
    font-size: 1.3em;
    padding: 20px 20px 0px 0px;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {color:#f68f9e;}
  }
}

// =========================== Media queries ============================ //
@media screen and (max-width: 650px) {
  .nav {
    display: inline-block;
    &__title {
      font-size: 1.3em;
      height: 40%;
      padding: 5px 0 0 20px;
    }
    &__menu {
      height: 40%;
    }
    &__menu-item {
      font-size: 1em;
      padding: 6px 0px 0px 20px;
    }
  }
  .nav .cart {
    right: -13px;
    top: 139%;
  }
}

@media screen and (max-width: 450px) {
  .nav__menu-item {font-size: 14px;}
}
</style>

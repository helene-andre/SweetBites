<template lang="pug">
header.nav-wrapper
  nuxt-link.title(to="/") CandyBar
  .spacer
  nav
    ul.nav
      li.nav__link
        nuxt-link(to="/") Home
      li.nav__link
        nuxt-link(to="/about") About
      li.nav__link
        nuxt-link(to="/boutique") Boutique
      li.nav__link
        nuxt-link(to="/contact") Contact
      li.cart-wrapper
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
.nav-wrapper {
  display: flex;
  & .title {font-size: 3em;}
}

.nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;

  &__link {
    font-family: "Indie Flower";
    font-size: 1.3em;
    padding: 10px;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {color:#f68f9e;}
  }

  & .cart-wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px 20px 10px 10px;

    & .cart__item-count {
      font-size: 10px;
      text-align: center;
      padding-right: 3px;
    }

    & .cart__icon {font-size: 1.5em;}
  }
}

</style>

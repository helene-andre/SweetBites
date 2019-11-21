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
        span.cart__icon
          svg(width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd")
            path(d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z")
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
@font-face {
  font-family: "candybar";
  src:url("/assets/css/fonts/candybar.eot");
  src:url("/assets/css/fonts/candybar.eot?#iefix") format("embedded-opentype"),
    url("/assets/css/fonts/candybar.woff") format("woff"),
    url("/assets/css/fonts/candybar.ttf") format("truetype"),
    url("/assets/css/fonts/candybar.svg#candybar") format("svg");
  font-weight: normal;
  font-style: normal;
}

[data-icon]:before {
  font-family: "candybar" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="i-"]:before,
[class*=" i-"]:before {
  font-family: "candybar" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.i-remove-from-cart:before {content: "\61";}
.i-add-to-cart:before {content: "\62";}
.i-cancel:before {content: "\63";}
.i-like:before {content: "\64";}
.i-settings:before {content: "\65";}
.i-add:before {content: "\66";}
.i-remove:before {content: "\67";}
.i-delete:before {content: "\68";}

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

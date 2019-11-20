<template lang="pug">
.cart-page
  .cart-wrapper
    h1 My cart
    cart
    //- p Checkout...

</template>

<script>
import { mapState } from 'vuex'
import Cart from '@/components/cart'

export default {
  head () {
    return {
      title: 'Cart',
      meta: [
        { name: 'My Cart', content: 'This my cart' }
      ]
    }
  },

  components: { Cart }
}
</script>

<style lang="scss">
.cart-page {
  background: url('../assets/images/cart-background.jpg');
  background-size: 100%;
  background-position: center;
  height: 90vh;
  margin-top: 10vh;
}

.cart-page .cart-wrapper {
  background-color: rgba(#fff, 0.8);
  width: 90%;
  height: 90%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
}

.cart-wrapper .cart {
  font-size: 13px;
  & .cart__item {
    width: max-content;
  }
}
</style>

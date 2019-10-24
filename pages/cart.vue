<template lang="pug">
section.container
  h1 My cart
  cart
  p Checkout...

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

</style>

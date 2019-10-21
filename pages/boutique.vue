<template lang="pug">
section.container
  h1 boutique

  div.candy-wrapper
    NuxtLink.candy(v-for="candy in candies" :key="candy.id" :to="`product/${candy.id}`")
      img.candy__picture(:src="`/products/${candy.src}.jpg`")
      .candy__name {{ candy.name }}

</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'Boutique',
      meta: [{ name: 'Boutique', content: 'This the boutique' }]
    }
  },

  data: () => ({
  }),

  computed: {
    ...mapState(['storedata']),
    candies () {
      return this.storedata
    }
  }
}

</script>

<style lang="scss">
.candy-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.candy {
  width: 200px;
  height: 200px;
  padding: 3%;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
  &:hover &__name {
    background-color: rgba(255, 255, 255, 0.6);
    opacity: 1;
  }

  &__picture {
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    transition: 0.3s ease-in-out;
  }

  &__name {
    position: relative;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 1;
    text-align: center;
    background-color: rgba(255, 255, 255, 0);
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
}
</style>

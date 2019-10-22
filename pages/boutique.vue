<template lang="pug">
section.container
  h1 boutique

  //- div Test Cart
  //-   div(v-for="item in cartItems" :key="item.id")
  //-     div item = {{ item.name }}
  //-       span quantity = {{ item.quantityTest }}

  div.candy-wrapper
    .candy(v-for="candy in candies" :key="candy.id")
      NuxtLink.candy__link(:to="`product/${candy.id}`")
        .candy__name {{ candy.name }}
        img.candy__picture(:src="getImage(`products/${candy.src}.jpg`)")
      button.candy__add-to-cart(@click="addToCart(candy)") Add to Cart

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

  methods: {
    getImage: image => require(`~/assets/images/${image}`),
    addToCart (candy) {
      this.$store.commit('addToCart', candy)
    }
  },

  computed: {
    ...mapState(['candies'])
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
  width: 235px;
  height: 235px;
  transition: 0.3s ease-in-out;

  &__link {
    display: block;
    position: relative;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;
    width: 90%;
    padding: 3%;
    transition: 0.3s ease-in-out;

    &:hover {opacity: 0.6;}
    &:hover &__name {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }

  &__picture {
    height: 210px;
    padding: 4%;
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;
    top: -17%;
    display: b;
    left: 50%;
    display: block;
    transform: translateX(-50%);
  }

  &__name {
    position: relative;
    top: 108px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  &__add-to-cart {
    display: block;
    position: relative;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    font-size: 1em;
    font-family: 'Indie Flower';
    color: #fff;
    background-color: #f9a8b4;
    padding: 2px 2px 0 2px;
    opacity: 0.8;
    transform: 0.3s ease-in-out;

    &:hover {opacity: 1;}
  }
}
</style>

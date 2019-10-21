<template lang="pug">
section.container.product
  //- Image.
  .product__image
    img(v-for="candy in product" :src="`/products/${candy.src}.jpg`")
  .product__text.pl-5
    //- Name.
    h1(v-for="candy in product") {{ candy.name }}

    //- Rating.
    v-rating(
      v-for="candy in product"
      v-model="rating"
      half-increments
      hover
      @input="updateRating")

    //- Description.
    h2 Description
    div(v-for="candy in product") {{ candy.description }}

    //- Weight.
    h2 Weight
    div(v-for="candy in product") {{ candy.weight }} grams.

    //- Price.
    h2 Price
    div(v-for="candy in product") {{ candy.price }} $ / Kg.

    //- Add to cart button.
    div.product__add-cart
      v-btn(@click="addToCart") Add to Cart

</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      id: this.$route.params.id,
      tempCart: []
    }
  },

  computed: {
    ...mapState(['storedata']),
    product () {
      return this.storedata.filter(candy => candy.id === this.id)
    },

    rating () {
      const test = this.storedata.filter(candy => candy.id === this.id)
      return test[0].rating
    }
  },

  methods: {
    updateRating (newRating) {
      const numberOfVotes = this.product[0].votes
      const newMeanRating = (newRating + (this.rating * numberOfVotes)) / (numberOfVotes + 1)
      this.rating = newMeanRating
      // this.incrementRating(this.product)
    },

    // incrementRating (state) {
    //   this.storedata.push(state)
    // },

    addToCart () {
      // Do somthing.
    }
  }
}

</script>

<style lang="scss">
.product {
  display: flex;
  padding: 4em 10% 0 10%;

  &__image {
    display: block;
    width: 50%;
    overflow: hidden;

    & img {
      height: 100%;
      max-height: 80vh;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__text {
    padding-left: 5%;
    width: 50%;

    & div {padding-bottom: 1em;}
    &__add-cart {padding-top: 1em;}
  }
}

</style>

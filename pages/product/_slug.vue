<template lang="pug">
section.container.product
  //- Image.
  .product__image
    img(:src="getImage(`products/${product.src}.jpg`)")
  .product__text.pl-5
    //- Name.
    h1 {{ product.name }}

    //- Rating.
    v-rating(
      v-model="rating"
      half-increments
      hover
      @input="")

    //- Description.
    h2 Description
    div {{ product.description }}

    //- Weight.
    h2 Weight
    div {{ product.weight }} grams.

    //- Price.
    h2 Price
    div {{ product.price }} $/Kg.

    //- Add to cart button.
    div
      button.product__add-to-cart(@click="addToCart(product)") Add to Cart

</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      slug: this.$route.params.slug
    }
  },

  computed: {
    ...mapState(['products']),
    product () {
      return this.products.filter(product => product.slug === this.slug)[0]
    },

    rating () {
      const test = this.products.filter(product => product.slug === this.slug)
      return test[0].rating
    }
  },

  methods: {
    getImage: image => require(`~/assets/images/${image}`),
    updateRating (newRating) {
      const numberOfVotes = this.product[0].votes
      const newMeanRating = (newRating + (this.rating * numberOfVotes)) / (numberOfVotes + 1)
      this.rating = newMeanRating
      // this.incrementRating(this.product)
    },

    addToCart (product) {
      this.$store.commit('addToCart', product)
    }
  }
}

</script>

<style lang="scss">
.product {
  display: flex;
  padding: 4em 10% 4em 10%;

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

  &__add-to-cart {
    font-size: 1em;
    font-family: "Indie Flower";
    color: #fff;
    background-color: #f9a8b4;
    padding: 2px 2px 0 2px;
    opacity: 0.8;
    transition: 0.3s ease-in-out;

    &:hover {opacity: 1;}
  }
}

</style>

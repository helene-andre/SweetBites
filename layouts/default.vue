<template lang="pug">
div
  Nav
  nuxt
</template>

<script>
import Nav from './partials/nav'

export default {
  components: { Nav },
  head () {
    return {
      title: 'Home',
      link: [
        { href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap', rel: 'stylesheet' },
        { href: 'https://fonts.googleapis.com/css?family=Indie+Flower&display=swap', rel: 'stylesheet' }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>

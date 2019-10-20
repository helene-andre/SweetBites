<template lang="pug">
div.home
  .home__picture
    img.picture(src="~/assets/images/home-background.jpg")
  section.container.home__text
    h1 Home
    p.subheading Voluptua sit vero sadipscing tempor sed ipsum et vero magna labore, sit et aliquyam eos est et ipsum, diam labore ut lorem ipsum ut sed est ea diam, nonumy invidunt.
    p Est vero at ipsum vero diam sed sanctus kasd, ea lorem elitr justo lorem et ipsum lorem, sit vero vero vero erat sed at labore, et justo ut diam et ipsum lorem. Ea gubergren eirmod ipsum at aliquyam sit. Sanctus et accusam diam et eirmod, diam et erat no sadipscing.
</template>

<script>
export default {
  head () {
    return {
      title: 'Home',
      meta: [
        { name: 'description', content: 'This my home description' },
        { name: 'keywords', content: 'home nuxt, nuxt information' }
      ]
    }
  },
  data: () => ({
    // content: [
    //   { title: 'hello', name: faker.name.findName }
    // ]
  })
}
</script>

<style lang="scss">
.home {
  &__picture {
    height: 73vh;
    overflow: hidden;
    & .picture {
      width: 100%;
    }
  }

  &__text {
    padding-top: 0;
    // & h1 {color:#f68f9e;}
  }
}

</style>

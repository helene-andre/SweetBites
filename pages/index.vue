<template lang="pug">
section.home
  .home__picture
    img.picture(src="~/assets/images/home-background.jpg")
  .container
    h1 Home
    p.subheading Voluptua sit vero sadipscing tempor sed ipsum et vero magna labore, sit et aliquyam eos est et ipsum, diam labore ut lorem ipsum ut sed est ea diam, nonumy invidunt.
    p Est vero at ipsum vero diam sed sanctus kasd, ea lorem elitr justo lorem et ipsum lorem, sit vero vero vero erat sed at labore, et justo ut diam et ipsum lorem. Ea gubergren eirmod ipsum at aliquyam sit. Sanctus et accusam diam et eirmod, diam et erat no sadipscing.
    p Stet consetetur dolor kasd eos nonumy diam ea, at amet sit stet vero duo ea no eos, no sed ut.
    p Sed dolor clita accusam stet sed lorem sea et ut, magna ea magna dolore no vero vero sit. Magna sanctus invidunt gubergren dolore voluptua gubergren dolor, consetetur nonumy vero no erat justo clita sit clita.
    p Dolor voluptua elitr sanctus duo et gubergren lorem eos ea. Ea sanctus duo nonumy sadipscing elitr. Ipsum invidunt rebum amet.
    p Qui in nisi amet mollit adipisicing excepteur fugiat et aliquip eiusmod enim voluptate duis sit. Qui mollit ut amet tempor ex. Ullamco tempor occaecat ea aliqua enim ipsum excepteur ipsum enim fugiat dolor ullamco cillum pariatur.
    p Deserunt in ut magna cupidatat aute. Commodo adipisicing consectetur fugiat incididunt labore cillum et fugiat deserunt in ad incididunt. Aliqua excepteur cupidatat Lorem deserunt officia aute ullamco magna nisi cillum laboris.
    p Commodo sint ut tempor aliqua sint proident ut. Reprehenderit minim ex ullamco nulla nisi incididunt est ad eu nulla consectetur. Ut dolore duis ipsum incididunt dolore nulla occaecat labore ad dolore aliquip ea aute exercitation. Commodo elit non enim est enim duis id veniam excepteur. Culpa sunt duis commodo cillum et occaecat. Esse deserunt eiusmod esse anim aliqua consequat sit non eu minim Lorem culpa.

</template>

<script>
export default {
  head () {
    return {
      title: 'Home',
      meta: [
        { name: 'description, home', content: 'This is home' }
      ]
    }
  }
}
</script>

<style lang="scss">
.home {
  &__picture {
    height: 73vh;
    overflow: hidden;
    & .picture {width: 100%;}
  }
}

</style>

<template lang="pug">
section.container
  h1 boutique
  div.candy-wrapper
    .candy(v-for="candy in candies")
      img.candy__picture(:src="require(`../assets/images/${candy.src}.jpg`)")
      //- div {{ candy.name }}
</template>

<script>
export default {
  data: () => ({
    candies: [
      { name: 'test', src: 'candy-1' },
      { name: 'test', src: 'candy-2' },
      { name: 'test', src: 'candy-3' },
      { name: 'test', src: 'candy-4' },
      { name: 'test', src: 'candy-5' },
      { name: 'test', src: 'candy-6' },
      { name: 'test', src: 'candy-7' },
      { name: 'test', src: 'candy-8' },
      { name: 'test', src: 'candy-9' },
      { name: 'test', src: 'candy-10' },
      { name: 'test', src: 'candy-11' },
      { name: 'test', src: 'candy-12' },
      { name: 'test', src: 'candy-13' },
      { name: 'test', src: 'candy-14' },
      { name: 'test', src: 'candy-15' },
      { name: 'test', src: 'candy-16' },
      { name: 'test', src: 'candy-17' },
      { name: 'test', src: 'candy-18' },
      { name: 'test', src: 'candy-19' },
      { name: 'test', src: 'candy-20' },
      { name: 'test', src: 'candy-21' },
      { name: 'test', src: 'candy-22' },
      { name: 'test', src: 'candy-23' },
      { name: 'test', src: 'candy-24' },
      { name: 'test', src: 'candy-25' },
      { name: 'test', src: 'candy-26' },
      { name: 'test', src: 'candy-27' },
      { name: 'test', src: 'candy-28' }
    ]
  })
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
  overflow: hidden;
  &__picture {
    height: 94%;
    padding: 3%;
  }
}
</style>

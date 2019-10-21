<template lang="pug">
header
  nuxt-link.logo.title(to="/") CandyBar
  nav
    ul.nav
      li
        nuxt-link.nav__link(to="/") Home
      li
        nuxt-link.nav__link(to="/about") About
      li
        nuxt-link.nav__link(to="/boutique") Boutique
      li
        nuxt-link.nav__link(to="/contact") Contact
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
  display: grid;
  grid-template-columns: repeat(2,auto);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.logo.title {
  font-size: 1.8em;
}

.logo, li a {
  padding: 1em 2em;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #000;
  font-size: .9em;
}

nav {justify-self: right;}
ul {list-style-type: none;}
li {display: inline;}

li a {
  font-family: 'Indie Flower';
  padding: 1em 2em;
  display: inline-block;
}
</style>

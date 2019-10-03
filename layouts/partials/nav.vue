<template lang="pug">
header
  nuxt-link.logo(to="/") Nuxty
  nav
    ul.nav
      li
        nuxt-link.nav__link(to="/") Home
      li
        nuxt-link.nav__link(to="about") About
      li
        nuxt-link.nav__link(to="service") Services
      li
        nuxt-link.nav__link(to="contact") Contact
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
  background: rgb(0, 219, 146);
  display: grid;
  grid-template-columns: repeat(2,auto);
}
.logo, li a {
  padding: 1em 2em;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: white;
  font-size: .9em;
}
nav {
  justify-self: right;
}
ul {
  list-style-type: none;
}
li {
  display: inline;
}
li a {
  padding: 1em 2em;
  display: inline-block;
  background: rgba(0,0,0,0.1);
}
</style>

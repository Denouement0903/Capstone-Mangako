<template>
  <Navbar/>
  <router-view/>
  <FooterComponent/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import FooterComponent from '../src/components/FooterComponent.vue';
export default {
  components: {
    Navbar,
    FooterComponent
}
}

</script>

<style>
@import url('https://fonts.cdnfonts.com/css/manga-temple');
#app {
  font-family: 'Manga Temple', sans-serif;                                             
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e2e4e6
}

body{
  background-image: url('https://i.postimg.cc/CxSWqdr1/4567147-rurouni-kennshin-anime-manga-himura-kenshin-samurai-x.png');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: red;
}


</style>

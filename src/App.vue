<template>
  <div>
      <Navbar/>
      <div class="container-fluid min-vh-100">
        <router-view/>
      </div>
      <FooterComponent/>
  </div>
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
  background-image: url('./assets/1090107-sunset-night-reflection-sunrise-evening-Berserk-Kentaro-Miura-dusk-dawn-darkness-computer-wallpaper.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
  min-height: 100vh;
  overflow-x: hidden;
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

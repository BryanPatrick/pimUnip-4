<template>
  <div id="app">
    <Header />
      <transition mode="out-in">
        <main id="main">
          <router-view/>
        </main>
      </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1;
}
a {
  text-decoration: none;
  color: black;
}
img {
  width: 100%;
}

.btn-reservar {
margin: 20px 0 0 20px;
width: 140px;
height: 30px;
border-radius: 20px;
cursor: pointer;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  components: Home,
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
}
</style>

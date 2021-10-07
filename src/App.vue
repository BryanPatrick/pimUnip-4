<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue'
import Acomodações from './views/Acomodacoes.vue'
import Contato from './views/Contato.vue'
import Endereco from './views/Endereco.vue'
import Teste from './views/Teste.vue'

export default {
  components: { 
    Home,
    Header,
  },
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

<template>
    <div class="border">
      <header class="header">
        <p class="logo">Vila dos sonhos</p>
      </header>
      <nav class="nav">
        | <router-link to="/">Home</router-link> |
        <router-link to="/acomodacoes">Acomodações</router-link> |
        <router-link to="/endereco">Endereço</router-link> |
        <router-link to="/contato">Contato</router-link> |     
      </nav>
    </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  display: flex;
  background-color: #363636;
  align-items: center;
  justify-content: space-around;
}
.logo {
  color: white;
  margin: 20px auto;
  text-transform: uppercase;
  font-size: 25px;
}
.nav {
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav a {
  margin: auto 15px;
  color: black;
}
.border {
  border-bottom: 1px solid #363636;
}
</style>

<template>
  <div class="home-grid">
    <header class="header-grid">
      <p class="logo">Vila dos sonhos</p>
    </header>
    <nav class="nav-grid nav">
    | <router-link to="/">Home</router-link> |
      <router-link to="/acomodacoes">Acomodações</router-link> |
      <router-link to="/endereco">Endereço</router-link> |
      <router-link to="/contato">Contato</router-link> |     
    </nav>
    <div class="presentation-grid presentation">
      <p>Bem vindo ao nosso Web Site!!</p>
    </div>
    <section class="content-grid content">
      <div>
        <div class="card">
          <h4>Imagens do hall</h4>
          <img src="../assets/img-hall.png" alt="">
        </div>
        <div class="card">
          <h4>Imagens da vista dos quartos</h4>
          <img src="../assets/img-vista.png" alt="">
        </div>
      </div>
      <div>
        <div class="card">
          <h4>Imagens do restaurante</h4>
          <img src="../assets/img-restaurante.png" alt="">
        </div>
        <div class="card">
          <h4>imagens do spa</h4>
          <img src="../assets/img-spa.png" alt="">
        </div>
      </div>
      <div>
        <div class="card">
          <h4>Imagens dos corredores</h4>
          <img src="../assets/img-corredores-2.0.png" alt="">
        </div>
        <div class="card">
          <h4>Imagens da piscina</h4>
          <img src="../assets/img-piscina.png" alt="">
        </div>
      </div>
    </section>
    <footer class="footer-grid">
        REDES SOCIAIS
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>

/* img {
  max-width: 200px;
  max-height: 200px;
} */
.header-grid {
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav a {
  margin: auto 15px;
  color: black;
}
.presentation {
  background-image: url("../assets/img-hotel-2.0.png");
  background-repeat: no-repeat;
}
.presentation p {
  text-transform: uppercase;
  font-size: 25px;
  margin: 91px 0px 0px 522px;
}
.card img {
  width: 100%;
}
.card {
  display: inline-block;
  border: solid 1 px #ccc;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  height: 150px;
  width: 300px;
}
.content {
  align-content: center;
}

/* grid */
.nav-grid {
  grid-area: nav;
}
.header-grid {
  grid-area: header;
}
.presentation-grid {
  grid-area: presentation;
}
.content-grid {
  grid-area: content-grid;
}
.footer-grid {
  grid-area: footer;
}
.home-grid {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 30px 125px 1fr 30px;
  grid-template-areas: 
    'header header'
    'nav nav'
    'presentation presentation'
    'content-grid content-grid'
    'footer footer';
}
</style>
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
    <section class="content-grid">
      <!-- <div>
        <img src="../assets/img-faixada.jpg" alt="">
      </div> -->
      <section class="colums">
        <div class="left-colum">
          <div class="card">
            <img src="../assets/img-hall.jpg" alt="">
          </div>
          <div class="card">
            <img src="../assets/img-restaurante.jpg" alt="">
          </div>
          <div class="card">
            <img src="../assets/img-corredores.jpg" alt="">
          </div>
        </div>
        <div class="right-colum">
          <div class="card">
            <img src="../assets/img-vista.jpg" alt="">
          </div>
          <div class="card">
            <img src="../assets/img-spa.jpg" alt="">
          </div>
          <div class="card">
            <img src="../assets/img-piscina.jpg" alt="">
          </div>
        </div>
      </section>
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
.colums {
  display: flex;
  flex-direction: column;
}
.colums img {
  max-height: 100px;
  max-width: 100px;
}
.card {
  float: left;
  border: solid 1 px #ccc;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  height: 150px;
  widows: 100px;
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
<template>
  <div>
    <div class="presentation-grid presentation">
      <p>Bem vindo ao nosso Web Site!!</p>
    </div>
    <section class="content">
      <div>
        <div class="card">
          <h4>Hall</h4>
          <img src="../assets/img-hall.png" alt="">
        </div>
        <div class="card">
          <h4>Quartos</h4>
          <img src="../assets/img-vista.png" alt="">
        </div>
      </div>
      <div>
        <div class="card">
          <h4>Restaurante</h4>
          <img src="../assets/img-restaurante.png" alt="">
        </div>
        <div class="card">
          <h4>Spa</h4>
          <img src="../assets/img-spa.png" alt="">
        </div>
      </div>
      <div>
        <div class="card">
          <h4>Corredores</h4>
          <img src="../assets/img-corredores-2.0.png" alt="">
        </div>
        <div class="card">
          <h4>Piscina</h4>
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

.presentation {
  margin-top: 10px;
  height: 125px;
  background-image: url("../assets/img-hotel-2.0.png");
  background-repeat: no-repeat;
}
.presentation p {
  position: relative;
  text-transform: uppercase;
  font-size: 25px;
  /* margin: 91px 0px 0px 522px; */
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
  margin: 10px;
  cursor: pointer;
}
.card h4 {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.content {
  margin: 0px 18%;
}
</style>
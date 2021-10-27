<template>
  <section class="container">
    <div class="card">
      <h2>Bem Vindo</h2>
      <img src="../assets/img-faixada.jpg" alt="Faixada">
      <p>
        Experiência memorável é estar com quem gostamos e viver momentos únicos,
        seja em um simples encontro ou em grandes comemorações!
      </p>
    </div>
    <div class="card">
      <h2>Áreas de Lazer</h2>
      <img src="../assets/img-piscina.jpg" alt="Piscina">
      <p>
        Dispomos de muitas áreas de lazer e diversão para todas as idades, confira a que melhor
        você se encaixa, confira !!
      </p>
      <button class="align"><router-link to="/Lazer">Saber Mais</router-link></button>
    </div>
    <div class="card">
      <h2>Eventos</h2>
      <img src="../assets/img-salao.jpg" alt="Salao">
      <p>
        O hotel conta com uma estrutura completa para oferecer o conforto que nunca viram igual
        e uma equipe amplamente treinada pronta para lhe atender desde a reserva até a finalização.
      </p>
      <button><router-link to="/Lazer">Saber Mais</router-link></button>
    </div>
  </section>
</template>

<script>


export default {
  name: 'Home',
}
</script>

<style scoped>
  .container {
    display: flex;
    align-content: center;
    justify-content: space-between;

    position: relative;
    width: 1000px;
    margin-left: 170px;
  }
  .card {
    width: 320px;
    height: 470px;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #dcdcdc;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  .card img {
    height: 60%;
  }
  p {
    text-align: center;
    margin: 15px 0;
  }
  h2 {
    text-align: center;
    margin: 5px 0;
  }
  button {
    width: 100px;
    height: 20px;
    border: 1px solid #363636;
    border-radius: 20px;
  }
  .align {
    margin-top: 36px;
  }
</style>
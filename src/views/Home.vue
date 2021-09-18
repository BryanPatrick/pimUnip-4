<template>
  <div>
    <header>
      <h1 class="logo">Vila dos sonhos</h1>
      <ul >
       | <li></li> |
      </ul>
    </header>
    <div>
      <p>Bem vindo ao nosso Web Site!!</p>
      <img src="../assets/img-hotel.jpg" alt="">
    </div>
    <section>
      <div>
        <img src="../assets/img-faixada.jpg" alt="">
      </div>
      <section>
        <div>
          <img src="../assets/img-hall.jpg" alt="">
          <img src="../assets/img-restaurante.jpg" alt="">
          <img src="../assets/img-corredores.jpg" alt="">
        </div>
        <div>
          <img src="../assets/img-vista.jpg" alt="">
          <img src="../assets/img-spa.jpg" alt="">
          <img src="../assets/img-piscina.jpg" alt="">
        </div>
      </section>
    </section>
    <footer>
        REDES SOCIAIS
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      navBar : 
      [{label: "Home"}, {label: "Acomodações"}, {label: "Endereço"},
      {label: "Contato"}
      ]
    }
  },
  props: ["Navigation"]
}
</script>

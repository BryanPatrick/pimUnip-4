<template>
    <div>
        <h2>Lazer</h2>
        <section class="container">
            <div class="card">
                <SliderLazer />
                <div class="descricao">
                    <h4><b>Areas de Lazer</b></h4>
                    <p>
                        Nossas instalações possuem algumas áreas de lazer onde você e seus 
                        filhos podem se desfrutar de nossos serviços, dentre eles temos: <br><br>

                        <b>Gaming zone</b>: Disponibilizamos vídeo games para seu entretenimento. <br><br>
                        <b>Academia</b>: Para os amantes do exercício físico, 
                            disponibilizamos também instrutores qualificados para melhor lhe atender. <br><br>
                        <b>Play Ground</b>: Brinquedos ao ar livre para intreter suas crianças enquanto você fica disponível para
                            disfrutar de nossos outros servuços. <br><br>
                        <b>Biblioteca</b>: Precisa estudar ? temos o lugar perfeito para você ! <br><br>
                        <b>Bingo Room</b>: Para finalizar a sua noite com chave de ouro temos salões com bingo,
                             carteado e muito mais ! <br><br>
                        <b>Meeting Room</b>: Para momentos inesqueciveis para você e seus familiares. <br><br> 
                    </p>
                    <button class="btn-reservar">
                        <router-link to="/Reserva">Reserva</router-link>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SliderLazer from '../components/imgSlider/SliderLazer.vue'

export default {
    name: 'Acomodacoes',
    components: { SliderLazer },
}
</script>

<style scoped>
    h2 {
        margin: 30px 0 0 30px;
    }
    .card {
        display: flex;
        border: 1px solid #dcdcdc;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
        margin: 30px 50px;
        padding: 20px;
        border-radius: 20px;
    }
    .card h4 {
        text-transform: uppercase;
        margin: 10px 0 50px 0;
    }
    h4, p {
        font-size: 20px;
    }
    p {
        color: #363636;
    }
    .descricao {
        margin: 0 25px;
    }
</style>
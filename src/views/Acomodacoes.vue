<template>
    <div>
        <h2>Apartamentos</h2>
        <section class="container">
            <div class="card">
                <SliderStandard />
                <div class="descricao">
                    <h4> <b> Stardard  </b> </h4>
                    <p>
                        Apartamentos completos com Ar Condicionado,
                        TV tela 32”, Internet Wireless, Cofre Digital,
                        Telefone, TV à Cabo, Cama Box e Frigobar.
                    </p>
                    <button>Reservar</button>
                </div>
            </div>
            <div class="card">
                <SliderSuite />
                <div class="descricao">
                    <h4>Suíte</h4>
                    <p>
                        Apartamentos completos com Ar Condicionado,
                        TV tela 32”, Internet Wireless, Cofre Digital,
                        Telefone, Secador, TV à Cabo, Cama Box, Frigobar .
                    </p>
                    <button>Reservar</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SliderSuite from '../components/imgSlider/SliderSuite.vue'
import SliderStandard from '../components/imgSlider/SliderStandard.vue'

export default {
    name: 'Acomodacoes',
    components: { SliderSuite, SliderStandard },
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
    .descricao button {
        margin: 20px 0 0 20px;
        width: 140px;
        height: 30px;
        border-radius: 20px;
    }
</style>
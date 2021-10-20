<template>
    <div>
        <h2>Endereço</h2>
        <div class="border">
            <div class="central">
                <p><b>Central</b>:</p><br>
                <p>
                    <b>AV</b>. Cuidado ao atravessar, 123 <br>
                    <b>Cep</b>: 00000-000 | Logo Ali - Brasil <br>
                    <b>Tel</b>: 00 0000-0000 <br>
                    <b>central@viladossonhos.com.br</b>
                </p>
            </div>
            <section class="info">
                <div class="no-central">
                    <p>
                        <b>Rua</b>: Logo Ali, 999 <br>
                        <b>Cep</b>: 11111-111 | Ali Perto - Brasil <br>
                        <b>Tel</b>: 99 9999-9999 <br>
                        <b>reserva@viladossonhos.com.br</b>
                    </p>
                </div>
                <div>
                    <p>
                        <b>Rua</b>: Aqui Perto, 157 <br>
                        <b>Cep</b>: 22222-222 | Ali Perto - Brasil <br>
                        <b>Tel</b>: 88 8888-8888 <br>
                        <b>reserva@viladossonhos.com.br</b>
                    </p>
                </div>
                <div>
                    <p>
                        <b>Rua</b>: Caboclo perdido, 335 <br>
                        <b>Cep</b>: 33333-333 | Aqui do Lado - Brasil <br>
                        <b>Tel</b>: 77 7777-7777 <br>
                        <b>reserva@viladossonhos.com.br</b>
                    </p>
                </div>
                <div>
                    <p>
                        <b>Rua</b>: Não Achei, 150 <br>
                        <b>Cep</b>: 44444-444 | Lá Encima - Brasil <br>
                        <b>Tel</b>: 66 6666-6666 <br>
                        <b>reserva@viladossonhos.com.br</b>
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .border {
        border: 1px solid #dcdcdc;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
        margin: 30px 50px;
        padding: 20px;
        border-radius: 20px;
    }
    .info {
        display: flex;
        padding-bottom: 30px;
    }
    p {
        margin: 30px;
    }
    .central {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }
    h2 {
        margin: 30px 0 0 30px;
    }
</style>
<template>
    <section>
        <h1>Reserva</h1>
        <form class="form-area">
            <div class="input-container">
                <label for="nomeCompleto">Nome Completo:</label>
                <input type="text" name="nome" id="nome" v-model="nome" 
                placeholder="Digite o seu nome completo">
            </div>
            <div class="input-container">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" v-model="email" 
                placeholder="Digite o seu email">
            </div>
            <div class="input-container">
                <label for="telefone">Telefone:</label>
                <input type="text" name="telefone" id="telefone" v-model="telefone" 
                placeholder="Digite o seu telefone">
            </div>
            <div class="input-container">
                <label for="cpf">CPF:</label>
                <input type="text" name="cpf" id="cpf" v-model="cpf" 
                placeholder="Digite o seu CPF">
            </div>
            <div class="input-container">
                <label for="quarto">Selecione o quarto desejado:</label>
                <div>
                    <input type="checkbox" name="standard" id="standard" 
                    v-model="standard" value="standard">
                        <span>Standard</span>
                    <input type="checkbox" name="suite" id="suite" 
                    v-model="suite" value="suite">
                        <span>Suite</span>
                </div>
            </div>
            <div>
                <input type="submit" class="submit-btn" value="Finalizar Reserva">
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: "Reserva",
}
</script>

<style scoped>
    .form-area {
        max-width: 300px;
        margin: 0 auto;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    label {
        font-weight: bold;
        margin-bottom: 15px;
    }
    #standard, #suite {
        margin: 0px 15px;
    }

</style>
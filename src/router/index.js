import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Acomodacoes from '../views/Acomodacoes.vue'
import Endereco from '../views/Endereco.vue'
import Contato from '../views/Contato.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Acomodacoes',
    name: 'Acomodacoes',
    component: Acomodacoes
  },
  {
    path: '/Endereco',
    name: 'Endereco',
    component: Endereco
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: Contato
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

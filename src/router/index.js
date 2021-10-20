import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Acomodacoes from '../views/Acomodacoes.vue'
import EnderecoEContato from '../views/EnderecoEContato.vue'
import Lazer from '../views/Lazer.vue'

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
    path: '/Lazer',
    name: 'Lazer',
    component: Lazer
  },
  {
    path: '/EnderecoEContato',
    name: 'EnderecoEContato',
    component: EnderecoEContato
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Acomodacoes from '../views/Acomodacoes.vue'
import EnderecoEContato from '../views/EnderecoEContato.vue'
import Lazer from '../views/Lazer.vue'
import Reserva from '../views/Reserva.vue'

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
  {
    path: '/Reserva',
    name: 'Reserva',
    component: Reserva
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth"});
  },
})

export default router

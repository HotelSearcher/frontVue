// import './assets/main.css'
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@studiometa/vue-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'


import HotelOwner from "@/components/HotelOwner.vue";
import HotelsItem from "@/components/HotelsItem.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: "search",
    path: "/",
    component: HotelsItem
  }, {
    name: "owner",
    path: "/owner",
    component: HotelOwner
  }],
})

const app = createApp(App)
    .use(router)
    .mount('#app')

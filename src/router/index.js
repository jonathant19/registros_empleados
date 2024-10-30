import {createRouter, createWebHistory} from 'vue-router'
import Ejemplo from '../views/ejemplo.vue'
import Paises from '../views/Paises.vue'

const routes =[

    {
        path:'/cargos',
        name:'cargos',
        component:Ejemplo,

    },
    {
        path:'/paises',
        name:'Paises',
        component:Paises,

    }
]


const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Note from "@/views/Note.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/note',
    name: 'Create',
    component: Note
  },
  {
    path: '/note/:id',
    name: 'Edit',
    component: Note
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

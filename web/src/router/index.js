import { createRouter, createWebHistory } from 'vue-router'
import PkindexView from '../views/pk/PkindexView.vue'
import RecordIndexView from '../views/record/RecordindxView.vue'
import RanklistIndexView from '../views/ranklist/RanklistindexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotindexView.vue'
import NotFound from '../views/error/NotFound.vue'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkindexView
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView
  },
  {
    path: "/user/bot/",
    name: "user_bot",
    component: UserBotIndexView
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

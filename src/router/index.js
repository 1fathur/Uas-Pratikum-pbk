import { createRouter, createWebHistory } from 'vue-router';
import Widget from '../views/Widget.vue';
import Portfolio from '../views/Portfolio.vue';
import Tugas2 from '../views/Tugas2.vue';
import Tugas3 from '../views/Tugas3.vue';
import Tugas4 from '../views/Tugas4.vue';
import Tugas5 from '../views/Tugas5.vue';
import Tugas6 from '../views/Tugas6.vue';

const routes = [
  { path: '/widget', component: Widget },
  { path: '/portfolio', component: Portfolio },
  { path: '/tugas2', component: Tugas2 },
  { path: '/tugas3', component: Tugas3 },
  { path: '/tugas4', component: Tugas4 },
  { path: '/tugas5', component: Tugas5 },
  { path: '/tugas6', component: Tugas6 },
  // Redirect to /widget if no matching route found
  { path: '/', redirect: '/widget' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

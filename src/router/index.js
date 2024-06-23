import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../components/Todos.vue';
import users from '../components/users.vue';
import AlbumsView from '../components/AlbumsView.vue'
import AlbumDetailView from '../components/AlbumInfoView.vue' 
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/users',
    name: 'users',
    component: users
  },
  {
    path: '/albums',
    name: 'albums',
    component: AlbumsView
  },
  {
    path: '/albums/:albumId', 
    name: 'album-detail',
    component: AlbumDetailView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

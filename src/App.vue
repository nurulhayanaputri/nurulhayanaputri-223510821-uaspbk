<template>

  
  <div>
    <nav>
      <ul>
        <li @click="selectedMenu = 'todos'"><router-link to="/todos"><i class="fas fa-tasks"></i> Todos</router-link></li>
        <li @click="selectedMenu = 'posts'"><router-link to="/users"><i class="fas fa-users"></i> Users</router-link></li>
        <li @click="selectedMenu = 'album'"><router-link to="/albums"><i class="fas fa-photo-video"></i> Album</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import Todos from './components/Todos.vue';
import Users from './components/users.vue';

export default {
  components: {
    Todos,
    Users,
  },
  data() {
    return {
      selectedMenu: 'Todos',
    };
  }
};
</script>

<style scoped>

nav {
  background-color: grey;
  padding: 15px;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
ul li a{
  color: #fff;
  text-decoration: none;

}
</style>

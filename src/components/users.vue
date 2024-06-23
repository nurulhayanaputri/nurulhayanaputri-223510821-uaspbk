<template>
    <div class="background">
      <div class="container">
        <h1 style="color: #fff;">Users</h1>
        <select v-model="selectedUser" class="select">
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
        <div v-if="isLoading" class="loading">Loading posts...</div>
        <div v-else class="posts-container">
          <h2>Posts</h2>
          <ul class="posts-list">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
          </ul>
        </div>
      </div>
    </div>
    <footer>
      <p>&copy; 2024 Nurul Hayana Putri</p>
    </footer>
  </template>
  
  <script setup>
  import { ref, watch, defineEmits, defineProps } from 'vue';
  
  const props = defineProps({
    users: {
      type: Array,
      required: true,
    },
  });
  
  const emits = defineEmits(['user-selected', 'posts-fetched']);
  
  const selectedUser = ref(null);
  const isLoading = ref(false);
  const users = ref([]);
  const posts = ref([]);
  
  const getUsers = async () => {
    const resource = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(resource);
    users.value = await response.json();
  };
  
  const getPosts = async () => {
    if (selectedUser.value !== null) {
      posts.value = [];
      isLoading.value = true;
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`);
      posts.value = await response.json();
      isLoading.value = false;
      emits('posts-fetched', posts.value);
    }
  };
  
  getUsers();
  
  watch(selectedUser, () => {
    getPosts();
    emits('user-selected', selectedUser.value);
  });
  </script>
  
  <style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  
  .background {
    background-image: url('image/1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    text-align: center;
  }
  
  .select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .loading {
    color: white;
  }
  
  .posts-container {
    color: white;
  }
  
  .posts-list {
    padding: 0;
  }
  
  li {
    list-style-type: none;
    margin-bottom: 10px;
  }
  
  footer {
    background-color: grey;
    color: white;
    text-align: center;
    padding: 5px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>
  
<template>
    <div class="background">
    <div class="album-view">
      <h1 class="title">Choose an Album</h1>
      <select v-model="selectedAlbum" @change="handleSelectChange" class="select-album">
        <option disabled value="" style="color:violet;">Select an album</option>
        <option v-for="album in albums" :key="album.id" :value="album.id" class="album-option">
          {{ album.title }}
        </option>
      </select>
    </div>
    
</div>
<footer>
    <p>&copy; {{ author }}</p>
  </footer>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  const author = 'Nurul Hayana Putri';
  const albums = ref([]);
  const selectedAlbum = ref(null);
  const router = useRouter();
  
  const fetchAlbums = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      albums.value = response.data;
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };
  
  const handleSelectChange = () => {
    if (selectedAlbum.value) {
      router.push({ name: 'album-detail', params: { albumId: selectedAlbum.value } });
    }
  };
  
  onMounted(() => {
    fetchAlbums();
  });
  </script>
  
  <style scoped>
  body {
  margin: 0;
  padding: 0;
}

.background {
  background-image: url(image/1.jpg);
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
}
  .album-view {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #c50e8e;
  }
  
  .title {
    text-align: center;
    font-size: 24px;
    color: #e4d7d7;
  }
  
  .select-album {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #6b2256;
    outline: none;
  }
  
  .album-option {
    font-size: 16px;
    color: #ece5e5;
  }
  

  .album-option:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  

  .album-option:focus {
    outline: none;
    background-color: #e6e6e6;
  }
  
  
  .album-option:selected {
    background-color: #e6e6e6;
  }
  footer{
  background-color: grey;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
  </style>
  
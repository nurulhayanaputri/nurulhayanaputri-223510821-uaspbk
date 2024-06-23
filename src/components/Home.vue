<template>
    <div class="home">
      <header class="header">
        <h1>Selamat Datang di Situs Ini!</h1>
       
      </header>
      <main class="content">
        <section class="welcome-section">
         
          <div class="welcome-text">
            <h2>Kenali Lebih Dekat</h2>
            <p>
              Kami senang Anda mengunjungi situs kami. Jelajahi berbagai fitur dan konten yang
              kami sediakan untuk memberikan Anda pengalaman terbaik.
            </p>
            
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
import { defineProps } from 'vue';


const props = defineProps({
  
});
</script>
  
  <style scoped>
  .home {
    font-family: Arial, sans-serif;
    text-align: center;
    color: #333;
    padding: 20px;
    background-image: url(image/1.jpg);
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  }
  
  
  .header {
    background-color: #cb18c3;
    color: white;
    padding: 40px 20px;
  }
  
  .header h1 {
    margin: 0;
    font-size: 2.5em;
  }
  
  .header p {
    font-size: 1.2em;
    margin: 10px 0 0;
  }
  
  .content {
    margin-top: 20px;
  }
  
  .welcome-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
  
  .welcome-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .welcome-text {
    max-width: 600px;
    margin-top: 20px;
    text-align: left;
  }
  
  .welcome-text h2 {
    color: #e14acb;
  }
  
  .welcome-text p {
    font-size: 1.1em;
    line-height: 1.6;
    margin: 20px 0;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #45a049;
  }
  </style>
  
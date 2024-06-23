<template>
  <div class="background">
    <h1>{{ pageTitle }}</h1>
    <p>{{ tableTitle }}</p> <br>
    <table>
      <thead>
        <tr>
          <th>Kegiatan</th>
          <th>Status</th>
          <th>Tindakan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in activities" :key="activity.id" :class="{ completed: activity.completed }">
          <td>
            <span :style="{ 'text-decoration': activity.completed ? 'line-through' : 'none' }">{{ activity.name }}</span>
          </td>
          <td>
            <span>{{ activity.completed ? 'Telah Selesai' : 'Belum Selesai' }}</span>
            <input type="checkbox" v-model="activity.completed">
          </td>
          <td>
            <button @click="cancelActivity(activity.id)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent="addActivity"> <br>
      <input type="text" v-model="newActivity" placeholder="Tambahkan Kegiatan"> <br>
      <button type="submit">Tambahkan</button>
    </form>
  </div>
  <footer>
    <p>&copy; {{ author }}</p>
  </footer>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const pageTitle = 'Nurul Hayana Putri - 223510821';
const tableTitle = 'Tabel Kegiatan';
const author = 'Nurul Hayana Putri';
const activities = ref([
  { id: 1, name: 'Memasak', completed: false },
  { id: 2, name: 'Shopping', completed: false },
  { id: 3, name: 'Membaca Buku', completed: false },
  { id: 4, name: 'Menari', completed: false }
]);
const newActivity = ref('');

const emits = defineEmits(['activity-added', 'activity-deleted']);

const addActivity = () => {
  if (newActivity.value.trim() !== '') {
    const activity = { id: Date.now(), name: newActivity.value, completed: false };
    activities.value.push(activity);
    emits('activity-added', activity);
    newActivity.value = '';
  }
};

const cancelActivity = (id) => {
  const index = activities.value.findIndex(activity => activity.id === id);
  if (index !== -1) {
    emits('activity-deleted', id);
    activities.value.splice(index, 1);
  }
};
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

.completed {
  filter: blur(0.5px);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid white;
  padding: 8px;
  text-align: left;
}

.completed span {
  text-decoration: line-through;
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

input[type="text"] {
  width: 200px;
  padding: 8px;
  margin-bottom: 10px;
}

button[type="submit"] {
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>

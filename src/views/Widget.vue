<template>
    <q-page>
      <div class="q-ma-md">
        <q-card class="q-mt-md" style="border-radius: 20px;">
          <q-card-section>
            <h1 class="text-h6">Widget</h1>
            <q-input v-model="city" debounce="300" outlined placeholder="Masukkan nama kota" />
          </q-card-section>
          <q-card-section v-if="weather">
            <h2>{{ weather.name }}</h2>
            <p>Suhu: {{ weather.main.temp }}°C</p>
            <p>{{ weather.weather[0].description }}</p>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import axios from 'axios';
  
  const city = ref('');
  const weather = ref(null);
  
  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=a7f05d1f22a35d1f0e42d68de10e9ea8`);
      weather.value = response.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  watch(city, async (newValue) => {
    if (newValue) {
      await getWeather();
    } else {
      weather.value = null;
    }
  });
  </script>
  
  <style scoped>
  .text-h6 {
    margin-bottom: 10px;
  }
  </style>
  
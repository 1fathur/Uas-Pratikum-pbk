<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          UAS Pratikum
        </q-toolbar-title>

        <q-btn @click="navigateTo('/widget')" flat label="Widget" />
        <q-btn @click="navigateTo('/portfolio')" flat label="Portofolio" />
        <q-btn @click="navigateTo('/tugas2')" flat label="Tugas 2" />
        <q-btn @click="navigateTo('/tugas3')" flat label="Tugas 3" />
        <q-btn @click="navigateTo('/tugas4')" flat label="Tugas 4" />
        <q-btn @click="navigateTo('/tugas5')" flat label="Tugas 5" />
        <q-btn @click="navigateTo('/tugas6')" flat label="Tugas 6" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

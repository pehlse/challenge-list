<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header/Header.vue'

</script>

<template>
  <Header/>
  <body>
    <RouterView />
  </body>


</template>

<style scoped>

@media (min-width: 1024px) {
}
</style>

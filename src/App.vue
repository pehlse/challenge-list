<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header/Header.vue'

</script>

<template>
  <Header/>
  <body class="container">
    <RouterView />
  </body>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--g-white2);
}
</style>

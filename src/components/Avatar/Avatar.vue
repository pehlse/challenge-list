<template>
  <div>
    <img class="avatar" v-if="img" :src="img" alt="Foto de perfil">
    <p v-else data-testid="avatar__no-photo">Sem foto</p>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    default: '',
  }
})
</script>

<style lang="scss" scoped>
$avatar-height: 100px;
$avatar-width: 100px;


.avatar {
  border: 1px solid var(--g-gray);
  border-radius: 100%;
  height: $avatar-height;
  display: flex;
  align-items: center;
  width: $avatar-width;
  justify-content: center;
  margin-bottom: var(--g-space-s);
}
</style>
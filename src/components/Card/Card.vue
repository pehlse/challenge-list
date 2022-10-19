<script setup>

</script>

<template>
  <div class="card-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  background-color: var(--g-white);
  min-height: 200px;
  min-width: 70%;
  border-radius: 1%;
  box-shadow: 0px 10px 51px -5px rgb(183 189 193 / 30%);
}
</style>
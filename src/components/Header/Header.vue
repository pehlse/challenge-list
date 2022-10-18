<template>
    <header class="header-wrapper">
      <img class="header-wrapper__image" src="@/assets/deloitte.svg" alt="Logo">
      <div>
        <h2 class="header-wrapper__title">Frontend challenge</h2>
      </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss"  scoped>
$logo-width: 100px;

.header-wrapper {
  display: inline-flex;
  background-color: var(--g-gray);
  min-height: var(--g-header-height);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: var(--g-space-s);
  text-align: right;

  &__image {
    width: $logo-width;
  }

  &__title {
    font: var(--title-headline-small)
  }
}
</style>
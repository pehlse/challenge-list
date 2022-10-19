<template>
  <div ref="scrollComponent" class="infinite-loading">
    <slot/>

    <p v-if="noMoreResults">{{ messageNoMoreResults }}</p>
    <span class="spinner" v-else-if="isLoading"/>
  </div>
</template>

<script setup>
import { ref, toRefs, defineEmits, onMounted, onUnmounted } from 'vue'

const scrollComponent = ref(null)
const emit = defineEmits(['loadMore'])
const props = defineProps({
  noMoreResults: {
    type: Boolean,
  },
  messageNoMoreResults: {
    type: String,
    default: '',
  },
})

const isLoading = ref(false)
const { noMoreResults } = toRefs(props)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (e) => {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    emit('loadMore')

    noMoreResults ? isLoading.value = true : isLoading.value = false
  }
} 

</script>

<style lang="scss" scoped>
  .infinite-loading {
    text-align: center;
  }

  .spinner {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 2px solid black;
    position: relative;
    animation: spin 2s ease infinite;
    text-align: center;
  }
  .spinner::before {
    position: absolute;
    content: "";
    top: 0;
    left: -7px;
    width: 40%;
    height: 70%;
    background: white;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
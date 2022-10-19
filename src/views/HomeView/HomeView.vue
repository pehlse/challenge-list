<script setup>
import { ref, onMounted } from 'vue'
import getRestaurants from '@/services/getRestaurants'

import Card from '@/components/Card/Card.vue'
import InfiniteLoading from '@/components/InfiniteLoading/InfiniteLoading.vue'
import Avatar from '@/components/Avatar/Avatar.vue'

const restaurants = ref([])
const count = ref(1)
let noMoreResults = ref(false)

onMounted(async () => {
  restaurants.value = await getRestaurants()
})

const handleMore = async () => {
  count.value = count.value + 1
  const moreRestaurants = await getRestaurants(count.value)
  noMoreResults.value = !moreRestaurants.length
  restaurants.value.push(...moreRestaurants)
}
</script>

<template>
  <section>
    <InfiniteLoading @loadMore="handleMore" :noMoreResults="noMoreResults" messageNoMoreResults="Sem mais resultados">
      <div class="home">
        <div class="home__card-wrapper" v-for="restaurant in restaurants" :key="restaurant.id">
          <Card class="home__card" >
            <Avatar  :img="restaurant.logo" />
            <h1 class="home__card-title"> {{ restaurant.name }} </h1>
            <dl class="home__card-list">
              <dt class="home__card-list-name">Horário de abertura:</dt>
              <dd>{{ restaurant.opening_hours }}</dd>

              <dt class="home__card-list-name">Métodos de pagamento:</dt>
              <dd>{{ restaurant.payment_methods }}</dd>

              <dt class="home__card-list-name">Preço:</dt>
              <dd>{{ restaurant.price_range }}</dd>
            </dl>
          </Card>
        </div>
      </div>
    </InfiniteLoading>
  </section>
</template>


<style lang="scss" scoped>
.home {
  margin: var(--g-space-s);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: var(--g-space-s);
  grid-row-gap: var(--g-space-s);

  &__card-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__card-title {
    margin-bottom: var(--g-space-s);
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--g-space-xxxl);
    text-align: justify;
  }

  &__card-list-name {
    font-weight: bold;
  }

  @media (min-width: 1024px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: var(--g-space-s);
    grid-row-gap: var(--g-space-s);
  }
}
</style>
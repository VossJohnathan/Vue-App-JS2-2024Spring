<script setup>

import DataTable from "./js/components/DataTable.vue";


const items = [
  {
    id: 1,
    name: 'Dino Nuggets',
    quantity: 12,
    quantityType: 'Bags',
    favorite: 'favorite'
  },
  {
    id: 2,
    name: 'Hot Pocket',
    quantity: 3,
    quantityType: 'Boxes',
    favorite: ' '
  },
  {
    id: 3,
    name: 'Ice Cream',
    quantity: 2,
    quantityType: 'Tubs'
  }
]

app.mount('#app')
</script>

<template>
  <div class="p-8 bg-grey-100 min-h-screen">
    <!--Table goes right here... HOPEFULLY-->
    <data-table items="items" />
  </div>
</template>

<style scoped>

</style>
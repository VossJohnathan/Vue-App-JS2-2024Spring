<script setup>

  const emit = defineEmits( ['filter']);
  const filter = (e) => {
    emit( 'filter', e.target.value);
  };
</script>

<template>
  <label class="flex mr-4 items-center flex-nowrap">
    <input type="radio" name="show" value="all" checked @change="filter">
    <span class="whitespace-nowrap ml-1">Show All</span>
  </label>

  <label class="flex mr-4 items-center flex-nowrap">
    <input type="radio" name="show" value="notExpired" @change="filter">
    <span class="whitespace-nowrap ml-1">Not Expired</span>
  </label>

  <label class="flex mr-4 items-center flex-nowrap">
    <input type="radio" name="show" value="expired" @change="filter">
    <span class="whitespace-nowrap ml-1">Expired</span>
  </label>
</template>

<style scoped>

</style>
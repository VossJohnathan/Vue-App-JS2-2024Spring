<script setup>
  import SearchForm from "./SearchForm.vue";
  import FilterRadios from "./FilterRadios.vue";
  import FilterDropdown from "./FilterDropdown.vue";
  import {computed, ref} from "vue";

  const searchFilter = ref(' ');
  const radioFilter = ref( ' ');

  const props = defineProps( {
    items: {
      type: Array,
      required: true
    }
  });

  const filteredItems = computed( () => {
    let items = props.items;

    switch ( radioFilter.value) {
      case 'notExpired' :
        //show all not expired items.
          //Need to add expiration dates.
          items = items.filter(item => new Date(item.expire).getDate() > new Date().getDate());
            break;
      case 'expired' :
        //show all items that are expired.
          //Need to add expiration dates.
          items = items.filter(item => new Date(item.expire) < new Date() );
            break;
    }

    if (searchFilter.value !== ' ') {
      items = items.filter(item => item.name.includes((searchFilter.value)))
    }

    return items
  });
  const handleSearch = (search) => {
    searchFilter.value = search;
  };

  const handleRadioFilter = (filter) => {
    radioFilter.value = filter;
  };
</script>

<template>
  <div class="bg-white  relative border rounded-lg">
    <div class="flex items-center justify-between">
      <!--Search Bar-->
      <search-form @search="handleSearch"/>

      <div class="flex items-center justify-end text-sm font-semibold">
        <!-- Radio Buttons-->
        <FilterRadios @filter="handleRadioFilter" />
        <!-- Filters -->
        <!--<filter-dropdown />-->
      </div>

    </div>
    <table class="w-full text-sm text-left text-grey-500">
      <thead class="text-xs text-grey-700 uppercase bg-grey-50">
        <tr>
          <th class="px-4 py-3">ID</th>
          <th class="px-4 py-3">Name</th>
          <th class="px-4 py-3">Quantity</th>
          <th class="px-4 py-3">Quantity Type</th>
          <th class="px-4 py-3">Favorite</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id" class="border-b">
          <td class="px-4 py-3 font-medium text-grey-900">{{ item.id }}</td>
          <td class="px-4 py-3 font-medium text-grey-900">{{ item.name }}</td>
          <td class="px-4 py-3 font-medium text-grey-900">{{ item.quantity }}</td>
          <td class="px-4 py-3 font-medium text-grey-900">{{ item.quantityType }}</td>
          <td class="px-4 py-3 font-medium text-grey-900">{{ item.favorite }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>

</style>
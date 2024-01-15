<template>
  <h2 class="text-lg hidden lg:block lg:pl-9 pt-2">Dining Room Tables</h2>
  <div class="flex gap-2 lg:hidden pt-2 px-5">
    <div class="flex gap-1">
      <img
        class="pt-1 w-5 h-5"
        src="../assets/img/filter.png"
        alt="filter-icon"
      />
      <p>Filters</p>
    </div>
    <p>405 items</p>
  </div>
  <div class="flex gap-2">
    <Filters class="sm:hidden" />
    <div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto my-5 lg:grid-cols-4">
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//Imports
import { useProductsStore } from '../store/products'
//Vars and Computed Vars 
const productsStore = useProductsStore()
const filteredProducts = computed(() => productsStore.products)
//Lifecycle Hooks 
onMounted(() => {
  productsStore.fetchProducts()
})
</script>

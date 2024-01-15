<template>
  <p class="text-center mt-7">You May also like</p>
  <div class="grid grid-cols-2 gap-6 mx-auto my-5 lg:grid-cols-4">
    <div v-for="product in filteredProducts.slice(0, 4)" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
//Imports
import { useProductsStore } from '../store/products'

//Vars and computed Vars
const productsStore = useProductsStore()
const filteredProducts = computed(() => productsStore.products)
//Lifecycle Hooks
onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<template>
  <NuxtLink :to="`/352d772c-953d-4c16-8006-187b73b26ee7`">
    <div class="relative">
      <img
        class="bg-white absolute right-1 top-1 p-1 rounded-[50%]"
        src="../assets/img/favorite.png"
        alt="favorite-icon"
      />
      <img :src="product.default_variant.image" :alt="product.title" />
    </div>

    <p class="truncate">{{ product.title }}</p> 
    <p>{{ product.default_variant.price }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
//Props
const { product } = defineProps(['product'])
</script>

<style scoped></style>

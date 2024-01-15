<template>
  <div class="flex items-center">
    <p class="px-5 text-[#C40024] font-bold text-xl">{{ price }}</p>
    <p class="line-through text-gray-400">EGP price</p>
  </div>
</template>

<script setup lang="ts">
//Props
const { price } = defineProps(['price'])
</script>

<style scoped></style>

<template>
  <div class="lg:px-[130px]">
    <ProductDetails :singleProduct="singleProduct" />
  </div>
</template>

<script setup lang="ts">
const singleProductApi =
  'https://joulia-app.dashboard.hbm.studio/api/v1/products/352d772c-953d-4c16-8006-187b73b26ee7'

const { data: singleProduct } = await useFetch(singleProductApi)
</script>


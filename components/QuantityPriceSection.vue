<template>
    <div>
          <p class="px-5 font-bold text-xl">{{ selectedColorPrice }}</p>
          <p class="flex justify-end text-gray-500 px-5">each</p>
        </div>
</template>

<script setup lang="ts">
//Props
const { selectedColorPrice } = defineProps(['selectedColorPrice'])
</script>

<style scoped>

</style>
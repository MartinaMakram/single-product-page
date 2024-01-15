<template>
  <div class="flex items-center gap-5 px-3">
    <button
      aria-label="Decrease Quantity"
      @click="decreaseQuantity"
      class="border-[0.6px] h-[2.5rem] w-[2.5rem] border-[#C1C1C1]"
    >
      <img class="mx-auto" src="../assets/img/minus.png" alt="minus-icon" />
    </button>
    <p>{{ quantity }}</p>
    <button
      aria-label="Increase Quantity"
      @click="increaseQuantity"
      class="border-[0.6px] h-[2.5rem] w-[2.5rem] border-[#C1C1C1]"
    >
      <img class="mx-auto" src="../assets/img/plus.png" alt="plus-icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
//Vars
const quantity = ref(1)
//Functions
const increaseQuantity = () => {
  quantity.value += 1
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1
  }
}
</script>


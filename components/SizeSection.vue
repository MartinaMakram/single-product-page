<template>
  <div>
    <div class="flex justify-between pt-5 px-5">
      <div class="flex gap-3">
        <p class="text-black-600">Size:</p>
        <p>{{ selectedSize || 'Please Select' }}</p>
      </div>
      <p class="underline pr-3">Size Guide</p>
    </div>
    <ul class="flex gap-4 text-black-600 items-center px-5">
      <li
        class="w-9 h-9 rounded cursor-pointer flex items-center justify-center"
        @mouseover="handleSizeHover('S')"
        @click="handleSizeClick('S')"
        :class="{
          'border-black': hoveredSize === 'S',
          'bg-black text-white': selectedSize === 'S',
        }"
      >
        S
      </li>
      <li
        class="w-7 h-7 rounded cursor-pointer flex items-center justify-center"
        @mouseover="handleSizeHover('M')"
        @click="handleSizeClick('M')"
        :class="{
          'border-black': hoveredSize === 'M',
          'bg-black text-white': selectedSize === 'M',
        }"
      >
        M
      </li>
      <li
        class="w-9 h-9 rounded cursor-pointer flex items-center justify-center"
        @mouseover="handleSizeHover('L')"
        @click="handleSizeClick('L')"
        :class="{
          'border-black': hoveredSize === 'L',
          'bg-black text-white': selectedSize === 'L',
        }"
      >
        L
      </li>
      <li
        class="w-9 h-9 rounded cursor-pointer flex items-center justify-center"
        @mouseover="handleSizeHover('XL')"
        @click="handleSizeClick('XL')"
        :class="{
          'border-black': hoveredSize === 'XL',
          'bg-black text-white': selectedSize === 'XL',
        }"
      >
        XL
      </li>
      <li
        class="w-9 h-9 rounded cursor-pointer flex items-center justify-center"
        @mouseover="handleSizeHover('2XL')"
        @click="handleSizeClick('2XL')"
        :class="{
          'border-blcak': hoveredSize === '2XL',
          'bg-black text-white': selectedSize === '2XL',
        }"
      >
        2XL
      </li>
      <li
        class="w-9 h-9 rounded cursor-pointer flex items-center justify-center"
        @mouseover="handleSizeHover('3XL')"
        @click="handleSizeClick('3XL')"
        :class="{
          'border-blcak': hoveredSize === '3XL',
          'bg-black text-white': selectedSize === '3XL',
        }"
      >
        3XL
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
//ref
const hoveredSize = ref<string>('')
const selectedSize = ref<string>('')
//Functions
const handleSizeHover = (size: string) => {
  hoveredSize.value = size
}

const handleSizeClick = (size: string) => {
  selectedSize.value = size
  hoveredSize.value = ''
}
</script>

<style scoped></style>

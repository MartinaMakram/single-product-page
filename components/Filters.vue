<template>
  <div class="lg:w-[300px] lg:my-5 lg:pr-8 lg:block hidden lg:pl-6">
    <!-- Category Section -->
    <div class="flex w-full">
      <h2 class="lg:mx-2 lg:pt-7 sm:m-0 sm:p-0">Category</h2>
      <button
        @click="openCategory"
        aria-label="Open Category"
        class="flex flex-1 justify-end lg:my-8 sm:pr-2"
      >
        <img src="../assets/img/minus.png" alt="minus-icon" />
      </button>
    </div>

    <div v-if="isCategoryOpen">
      <div
        class="bg-white-secondary flex items-center gap-2 p-2 w-full my-2 rounded-3xl mx-2"
      >
        <img
          class="w-4 h-4"
          src="../assets/img/search-icon.png"
          alt="search-icon"
        />
        <button aria-label="Search by Category" class="text-gray-400"> 
          Search by Category
        </button>
      </div>
      <div class="lg:pl-4" v-for="category in categories" :key="category.id">
        <label>
          <input
            type="checkbox"
            :value="category.id"
            v-model="category.checked"
            @change="filterProductsByCategory"
          />
          {{ category.title }}
        </label>
      </div>
    </div>

    <!-- Brand Section -->
    <div class="sm:hidden lg:block">
      <h2 class="mx-2 pt-7">Brand</h2>
      <div
        class="bg-white-secondary flex items-center gap-2 p-2 w-full my-2 rounded-3xl mx-2"
      >
        <img
          class="w-4 h-4"
          src="../assets/img/search-icon.png"
          alt="search-icon"
        />
        <button aria-label="Search by Brand" class="text-gray-400">
          Search by brand
        </button>
      </div>
      <div v-for="brand in brands" :key="brand.id">
        <label>
          <input
            type="checkbox"
            :value="brand.title"
            v-model="brand.checked"
            @change="filterProductsByBrand"
          />
          {{ brand.title }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
//Imports
import { useProductsStore } from '~/store/products'
import axios from 'axios'

//Const Variables
const CATEGORY_API_URL =
  'https://joulia.dashboard.hamburgermenu.app/api/v1/categories'
const BRAND_API_URL = 'https://joulia.dashboard.hamburgermenu.app/api/v1/brands'

//Refs
const categories = ref([])
const brands = ref([])
const isCategoryOpen = ref(true)
const productsStore = useProductsStore()

//Lifecycle Hooks
onMounted(async () => {
  try {
    const categoryResponse = await axios.get(CATEGORY_API_URL)
    categories.value = categoryResponse.data.data.map((category) => ({
      ...category,
      checked: false,
    }))
  } catch (error) {
    console.log('Error Fetching Category Data', error)
  }

  try {
    const brandResponse = await axios.get(BRAND_API_URL)
    brands.value = brandResponse.data.data
  } catch (error) {
    console.log('Error Fetching Brands Data', error)
  }
})

//Functions
const openCategory = () => {
  isCategoryOpen.value = !isCategoryOpen.value
}

const filterProductsByCategory = () => {
  const selectedCategories = categories.value
    .filter((category) => category.checked)
    .map((category) => category.id)

  const filters = {}
  if (selectedCategories.length > 0) {
    filters.categories = selectedCategories
  }

  productsStore.fetchProducts(filters)
}

const filterProductsByBrand = () => {
  const selectedBrands = brands.value
    .filter((brand) => brand.checked)
    .map((brand) => brand.title)

  const filters = {}
  if (selectedBrands.length > 0) {
    filters.brands = selectedBrands
  }

  productsStore.fetchProducts(filters)
}
</script>

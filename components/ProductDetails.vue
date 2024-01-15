<template>
  <BrandNameSection class="lg:hidden" />

  <MainTitle
    class="lg:hidden"
    :title="singleProduct.data.default_variant.title"
  />

  <div class="lg:flex lg:justify-center lg:gap-4">
    <!--product main imge-->
    <img
      class="w-full h-[23rem] lg:w-[37rem] lg:h-[37rem]"
      :src="singleProduct.data.default_variant.image"
      alt="singleProduct Image"
    />

    <div class="lg:flex lg:flex-col lg:gap-2 lg:pt-10 hidden">
      <MainTitle :title="singleProduct.data.default_variant.title" />
      <BrandNameSection />
      <PriceSection :price="selectedColorPrice" />

      <!--Colors Section-->
      <div class="pt-5 px-5">
        <label class="inline mb-2">Color: </label>
        <p class="inline">{{ selectedColorText }}</p>
        <div class="flex space-x-2 pt-4">
          <button
            v-for="color in singleProduct.data.options[0].values"
            :key="color.key"
            @click="selectColor(color.value, color.name)"
            aria-label="Select Color"
            :class="{
              'w-8 h-8': true,
              border: true,
              'border-black': selectedColor === color.value,
              'rounded-2xl': true,
            }"
            :style="{ backgroundColor: formatColorValue(color.value) }"
          ></button>
        </div>
      </div>

      <SizeSection />

      <!--Quantity Section-->
      <p class="pt-3 px-5 hidden lg:block">Quantity</p>

      <div class="flex items-center justify-between gap-5 px-2 pt-2">
        <!--Quantity btns-->
        <QuantitySection />

        <QuantityPriceSection class="hidden lg:block" :selectedColorPrice="selectedColorPrice"/>
      </div>

      <h2 class="pt-5 px-5 text-[1rem] text-[#1B1C1E]-400 max-w-[27rem]">
        {{ singleProduct.data.default_variant.title }}
      </h2>
    </div>
  </div>
  <!--Description-->
  <h2 class="pt-5 px-5 text-[1rem] text-[#1B1C1E]-400 max-w-[27rem] lg:hidden">
    {{ singleProduct.data.default_variant.title }}
  </h2>
  <!--Price Section-->
  <PriceSection class="lg:hidden" :price="selectedColorPrice" />

  <!--Color Section-->
  <div class="pt-5 px-5 lg:hidden">
    <label class="inline mb-2">Color: </label>
    <p class="inline">{{ selectedColorText }}</p>
    <div class="flex space-x-2 pt-4">
      <button
        v-for="color in singleProduct.data.options[0].values"
        :key="color.key"
        @click="selectColor(color.value, color.name)"
        aria-label="Select Color"
        :class="{
          'w-8 h-8': true,
          border: true,
          'border-black': selectedColor === color.value,
          'rounded-2xl': true,
        }"
        :style="{ backgroundColor: formatColorValue(color.value) }"
      ></button>
    </div>
  </div>

  <SizeSection class="lg:hidden" />
  <!--Quantity-->
  <p class="pt-3 px-5 lg:hidden">Quantity</p>

  <div class="flex items-center justify-between gap-5 pt-2 px-2 lg:hidden">
    <!--Quantity Section-->
    <QuantitySection class="lg:hidden" />

    <QuantityPriceSection class="lg:hidden" :selectedColorPrice="selectedColorPrice"/>
  </div>

  <div class="flex justify-between items-center mt-2 p-4 w-full bg-[#F8F8F8]">
    <p>Product Details</p>
    <img class="w-4 h-4" src="../assets/img/plus.png" alt="plus-icon" />
  </div>

  <div
    class="flex justify-between items-center mt-2 p-4 w-full bg-[#F8F8F8] cursor-pointer"
    @click="toggleReviews"
  >
    <p>Reviews</p>
    <img
      v-if="!showReviews"
      class="w-4 h-4"
      src="../assets/img/plus.png"
      alt="minus-icon"
    />
    <img v-if="showReviews" src="../assets/img/minus.png" alt="minus-icon" />
  </div>

  <div  v-if="showReviews">
    <Reviews />
  </div>

  <YouMayAlsoLike/>
</template>

<script setup lang="ts">
//Props
const { singleProduct } = defineProps(['singleProduct'])
//refs
const selectedColor = ref(singleProduct.data.options[0].values[0].value)
const selectedColorText = ref('Please Select')
const selectedColorPrice = ref(singleProduct.data.default_variant.price)
const showReviews = ref(false)
//Functions
const selectColor = async (color: any, name: string) => {
  selectedColor.value = formatColorValue(color)
  selectedColorText.value = name
  const variantApi = `https://joulia-app.dashboard.hbm.studio/api/v1/product-variants/${singleProduct.data.id}?filter[options]=${color}`
  const variant = await useFetch(variantApi)

  if (variant) {
    const variantDataValue = variant.data.value as { data: { price: any } }
    selectedColorPrice.value = variantDataValue.data.price
  }
}

const formatColorValue = (color: any) => {
  return color.startsWith('#') ? color : '#' + color
}

const toggleReviews = () => {
  showReviews.value = !showReviews.value
}
</script>


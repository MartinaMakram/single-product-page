import axios from 'axios'
import type { Product, ProductFilters } from '~/types/index'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetchProducts(filters: ProductFilters = {}): Promise<void> {
      try {
        let api = 'https://joulia.dashboard.hamburgermenu.app/api/v1/products'

        if (Object.keys(filters).length > 0) {
          const filterParams = Object.entries(filters)
            .map(([key, value]) => `filter[${key}]=${value}`)
            .join('&')
          api += `?${filterParams}`
        }

        const response = await axios.get(api)
        this.products = response.data.data
      } catch (error) {
        console.error('Error Fetching Products:', error)
      }
    },
  },
})

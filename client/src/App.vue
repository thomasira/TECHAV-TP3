<template>
  <div class="max-w-screen-xl mx-auto bg-gray-600 text-white p-3">
      <HomeView/>
  </div>
</template>

<script>
import HomeView from '@/views/HomeView.vue'
import ProductDataService from '@/services/ProductDataService'

export default {

  data () {
    return {
      inventory: {}
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  },
  components: { HomeView }
}
</script>

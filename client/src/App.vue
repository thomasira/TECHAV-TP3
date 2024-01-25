<template>
  <div class="bg-neutral-200 min-h-screen flex flex-col font-">
      <MainNav><MainLogo/></MainNav>
      <div class="text-dark text-text font-archivo flex flex-1 flex-col gap-5">
        <RouterView
        :inventory="inventory"
        :types="types"
        :addInv="addInventory"
        :updateInv="updateInventory"
        :deleteProd="deleteProduct"
      />
      </div>
      <MainFooter/>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
import TypeDataService from './services/TypeDataService'
import MainNav from '@/components/MainNav.vue'
import MainFooter from '@/components/MainFooter.vue'
import MainLogo from './components/MainLogo.vue'
export default {

  data () {
    return {
      inventory: [],
      types: {}
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
    TypeDataService.getAll()
      .then(response => {
        this.types = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  },
  methods: {
    addInventory (product) {
      this.inventory.push(product)
    },
    deleteProduct (id) {
      console.log(id)
    }
  },
  components: { MainNav, MainFooter, MainLogo }
}
</script>

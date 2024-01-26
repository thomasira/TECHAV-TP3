<template>
<li v-if="!showUpdate" class='product-card'>
  <div class='flex-1'>
    <div class='flex-1 font-bold'>
      <h3 class='text-m'>{{ product.name }}</h3>
      <div>
        <p>$</p>
        <p>{{ parseFloat(product.price).toFixed(2) }}</p>
      </div>
    </div>
    <div>
      <p>{{ product.description }}</p>
      <p class='text-main-800'>{{ product.type.type }}</p>
    </div>
  </div>
  <div>
    <button
      class='flex items-center btn btn-gr-red btn-sm gap-2 saturate-[.8]' @click="deleteProduct">delete
    </button>
    <button
      class='flex items-center btn btn-gr-blue-200 btn-sm gap-2 saturate-[.8]' @click="toggleUpdate">modify
    </button>
  </div>
</li>
<ProductUpdate v-else
  :product="product"
  :types="types"
  :closeUpdate="toggleUpdate"
  :productIndex="productIndex"
  :findType="findType"
  :updateInv="updateInv"
  :showDialog="showDialog"
/>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
import ProductUpdate from '@/components/ProductUpdate.vue'
export default {
  data () {
    return {
      showUpdate: false
    }
  },
  props: ['removeInv', 'product', 'inventory', 'types', 'findType', 'updateInv', 'showDialog'],
  computed: {
    productIndex () {
      const index = this.inventory.findIndex(p => p.id === this.product.id)
      return index
    }
  },
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.product.id)
        .then(res => {
          this.removeInv(this.productIndex)
          this.$router.push({ name: 'products' })
        })
        .catch(err => {
          this.message = err.response.data.message
        })
    },
    toggleUpdate () {
      this.showUpdate = !this.showUpdate
    }
  },
  components: { ProductUpdate }
}
</script>

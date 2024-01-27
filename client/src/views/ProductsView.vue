<template>
<div class='flex flex-col px-5 items-center max-w-[1400px] self-center'>
  <div class='py-10 flex flex-col items-center gap-5 w-full'>
    <ProductsHeader
      :types="types"
      :addInv="addInv"
      :findType="findType"
      :showDialog="showDialog"
    />
    <span class='w-full h-[1px] block bg-main-600 shadow-lg shadow-dark'></span>
  </div>
  <ul v-if="inventory.length != 0" class='flex flex-col gap-5 py-4'>
    <ProductThumb v-for="(product, i) in inventory"
      :key="i"
      :index="i"
      :product="product"
      :inventory="inventory"
      :removeInv="removeInv"
      :types="types"
      :findType="findType"
      :updateInv="updateInv"
      :showDialog="showDialog"
    />
  </ul>
  <h2 v-else>No products available</h2>
</div>
</template>

<script>
import ProductsHeader from '@/components/ProductsHeader.vue'
import ProductThumb from '@/components/ProductThumb.vue'
export default {
  props: [
    'addInv',
    'inventory',
    'removeInv',
    'showDialog',
    'types',
    'updateInv',
    'pageTitle'
  ],
  data () {
    this.pageTitle('products')
    return {
      showUpdate: false
    }
  },
  components: {
    ProductsHeader,
    ProductThumb
  },
  methods: {
    findType (id) {
      return this.types.find(t => t.id === id).type
    }
  }
}
</script>

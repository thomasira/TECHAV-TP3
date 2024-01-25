<template>
<div class='flex flex-col px-5 items-center max-w-[1200px] self-center'>
  <div class='py-10 flex flex-col items-center gap-5 w-full'>
    <ProductsHeader :types="types" :addInv="addInv"/>
      <!-- <Header toggleForm={ () => setShowAdd(!showAdd) } showAdd={ showAdd }/>
      { showAdd && <AddProduct onAdd={ addProduct } toggleForm={ () => setShowAdd(!showAdd) }/> } -->
    <span class='w-full h-[1px] block bg-main-600 shadow-lg shadow-dark'></span>
  </div>
  <ul v-if="inventory.length != 0" class='flex flex-wrap gap-5 justify-center py-4'>
    <li v-for="(product, i) in inventory" :key="i" class='product-card'>
      <div class='flex-1'>
          <div class='flex-1 font-bold'>
              <h3 class='text-m'>{{ product.name }}</h3>
              <div>
                  <p>$</p>
                  <p>{{ product.price.toFixed(2) }}</p>
              </div>
          </div>
          <div>
              <p>{{ product.description }}</p>
              <p class='text-main-800'>{{ product.type.type }}</p>
          </div>
      </div>
      <div>
          <button
              class='flex items-center btn btn-gr-red btn-sm gap-2 saturate-[.8]' @click="deleteProd(product.id)"><FaTimes class='text-light'/>delete
          </button>
          <button
              class='flex items-center btn btn-gr-blue btn-sm gap-2 saturate-[.8]'><FaRegPenToSquare class='text-light'/>modify
          </button>
      </div>
    </li>
  </ul>
  <h2 v-else>No products available</h2>
</div>
</template>

<script>
import ProductsHeader from '@/components/ProductsHeader.vue'
export default {
  props: ['inventory', 'types', 'addInv', 'deleteProd'],
  components: {
    ProductsHeader
  }
}
</script>

<template>
<form class='form form-full form-gray'>
  <h3 class='text-s text-center'>Modify <strong class='text-m text-blue-900'>{{ product.name }}</strong></h3>
  <span class="text-s text-center text-red-700">{{ error.form }}</span>
  <div>
    <div class='flex-1 min-w-[200px]'>
      <div class='form-control'>
        <label><span>Product</span>
            <input
            v-model="updateProduct.name"
            />
            <span class="text-red-700 font-semibold">{{ error.name }}</span>
        </label>
      </div>
      <div class='form-control'>
        <label><span>Description</span>
          <textarea
            v-model="updateProduct.description"
          >
          </textarea>
          <span class="text-red-700 font-semibold">{{ error.description }}</span>
        </label>
      </div>
    </div>
    <div>
      <div class='form-control'>
          <label><span>Set price</span>
              <div class='flex items-center gap-2'>
                  <span class='font-bold'>$</span>
                  <input class='flex-1'
                  type='number'
                  step='0.01'
                  min='0'
                  v-model="updateProduct.price"
                  />
              </div>
              <span class="text-red-700 font-semibold">{{ error.price }}</span>
          </label>
      </div>
      <div class='form-control'>
        <label><span>Category</span>
          <select name='category' v-model="updateProduct.typeId">
          <option :value=0>please select a category</option>
          <option v-for="(type, i) in types" :key="i" :value="type.id">
            {{ type.type }}
          </option>
          </select>
          <span class="text-red-700 font-semibold">{{ error.category }}</span>
        </label>
      </div>
    </div>
  </div>
  <div class='flex gap-3'>
    <button class='btn btn-sm btn-gr-yellow' type="button" @click="onUpdate">save product</button>
    <button class='btn btn-sm btn-gr-red' type="button" @click="closeUpdate">cancel</button>
  </div>
</form>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: [
    'closeUpdate',
    'findType',
    'product',
    'productIndex',
    'showDialog',
    'types',
    'updateInv'
  ],
  data () {
    return {
      // copy product prop to fill form data
      updateProduct: { ...this.product },
      // error object for error handling, see below
      error: {}
    }
  },
  methods: {
    onUpdate () {
      // empty error object
      this.error = {}

      // fill it up if any error present
      if (!this.updateProduct.name) this.error.name = 'please input a product name'
      if (!this.updateProduct.price) this.error.price = 'please input a product price'
      if (!this.updateProduct.typeId) this.error.category = 'please select a category'

      if (Object.keys(this.error).length === 0) {
        // manually inserting product.type to pass to DOM handler
        this.updateProduct.type = {
          id: this.updateProduct.typeId,
          type: this.findType(this.updateProduct.typeId)
        }
        // send update request to product data service then trigger DOM update
        ProductDataService.update(this.product.id, this.updateProduct)
          .then(res => {
            this.updateInv(this.productIndex, this.updateProduct)
            this.closeUpdate()
            this.showDialog('product updated')
          })
          .catch(err => {
            this.showDialog(err.response.data.message)
          })
      } else {
        this.error.form = 'please make sure all mandatory information is filled'
      }
    }
  }
}
</script>

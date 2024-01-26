<template>
<form class='form form-full form-gray'>
  <h3 class='text-s text-center'>Modify <strong class='text-m text-blue-900'>{{ product.name }}</strong></h3>
  <div>
    <div class='flex-1 min-w-[200px]'>
      <div class='form-control'>
        <label><span>Product</span>
            <input
            v-model="updateProduct.name"
            />
        </label>
      </div>
      <div class='form-control'>
        <label><span>Description</span>
          <textarea
            v-model="updateProduct.description"
          >
          </textarea>
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
          </label>
      </div>
      <div class='form-control'>
        <label><span>Category</span>
          <select name='category' v-model="updateProduct.typeId">
          <option>please select a category</option>
          <option v-for="(type, i) in types" :key="i" :value="type.id">
            {{ type.type }}
          </option>
          </select>
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
  props: ['product', 'types', 'closeUpdate', 'updateInv', 'productIndex', 'findType', 'validateData', 'showDialog'],
  data () {
    return {
      updateProduct: { ...this.product }
    }
  },
  methods: {
    onUpdate () {
      this.updateProduct.type = { id: this.updateProduct.typeId, type: this.findType(this.updateProduct.typeId) }
      ProductDataService.update(this.product.id, this.updateProduct)
        .then(res => {
          this.updateInv(this.productIndex, this.updateProduct)
          this.closeUpdate()
          this.showDialog('product updated')
        })
        .catch(err => {
          this.showDialog(err.response.data.message)
        })
    }
  }
}
</script>

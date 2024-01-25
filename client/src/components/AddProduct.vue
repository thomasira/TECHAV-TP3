<template>
    <form class='form form-blue w-full'>
      <div>
        <div class='flex-1 min-w-[300px]'>
          <div class='form-control'>
            <label><span>Product</span>
                <input
                type='text'
                placeholder='Product name'
                v-model="product.name"
                />
            </label>
          </div>
          <div class='form-control'>
              <label><span>Description</span>
                  <input
                  type='text'
                  placeholder='Add description'
                  v-model="product.description"
                  />
              </label>
          </div>
        </div>
        <div>
          <div class='form-control'>
              <label><span>Set price</span>
                  <div class='flex items-center gap-2'>
                      <span class='text-s'>$</span>
                      <input class='flex-1'
                      type='number'
                      step='0.01'
                      min='0'
                      v-model.number="product.price"
                      />
                  </div>
              </label>
          </div>
          <div class='form-control'>
              <label><span>Category</span>
                  <select v-model="product.type">
                    <option>please select a category</option>
                    <option v-for="(type, i) in types" :key="i" :value="{id: type.id, type: type.type}">{{ type.type }}</option>
                  </select>
              </label>
          </div>
        </div>
      </div>
      <button class='btn btn-gr-yellow self-start' type="button" @click="saveProduct">save product</button>
  </form>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['addInv', 'toggle', 'types'],
  data () {
    return {
      message: null,
      showForm: true,
      product: {
        name: '',
        price: '',
        description: '',
        type: { id: '', type: '' },
        typeId: ''
      }
    }
  },
  methods: {
    saveProduct () {
      this.product.typeId = this.product.type.id
      console.log(this.product)
      ProductDataService.create(this.product)
        .then(res => {
          this.showForm = false
          this.product.id = res.data.id
          this.addInv(this.product)
          this.product = {}
        })
        .catch(err => {
          this.message = err.response.data.message
        })
      this.toggle()
    }
  }
}
</script>

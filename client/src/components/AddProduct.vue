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
            <span class="text-red-400 font-semibold">{{ error.name }}</span>
            </label>
          </div>
          <div class='form-control'>
              <label><span>Description</span>
                <textarea
                  v-model="product.description"
                >
                </textarea>
                <span class="text-red-400 font-semibold">{{ error.description }}</span>
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
                    <span class="text-red-400 font-semibold">{{ error.price }}</span>
              </label>
          </div>
          <div class='form-control'>
              <label><span>Category</span>
                  <select v-model="product.typeId">
                    <option value="0">please select a category</option>
                    <option v-for="(type, i) in types" :key="i" :value="type.id">{{ type.type }}</option>
                  </select>
                  <span class="text-red-400 font-semibold">{{ error.category }}</span>
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

  props: ['addInv', 'toggle', 'types', 'findType', 'validateData', 'showDialog'],
  data () {
    return {
      message: null,
      showForm: true,
      product: {
        name: '',
        price: '00.00',
        description: '',
        typeId: 0
      },
      error: {}
    }
  },
  methods: {
    saveProduct () {
      this.error = {}
      if (!this.product.name) this.error.name = 'please input a product name'
      if (!this.product.price) this.error.price = 'please input a product price'
      if (!this.product.typeId) this.error.category = 'please select a category'

      if (Object.keys(this.error).length === 0) {
        this.product.type = { id: this.product.typeId, type: this.findType(this.product.typeId) }
        ProductDataService.create(this.product)
          .then(res => {
            this.showForm = false
            this.product.id = res.data.id
            this.addInv(this.product)
            this.product = {}
            this.showDialog('product created')
          })
          .catch(err => {
            this.showDialog(err.response.data.message)
          })
        this.toggle()
      } else {
        this.error.form = 'please make sure all mandatory information is filled'
      }
    }
  }
}
</script>

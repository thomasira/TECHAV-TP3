<template>
<header class='flex gap-3 justify-center'>
    <div>
        <h2 class='text-s font-bold'>Consult and modify your products</h2>
        <p class='text-xs'>You can add, update and delete your products in this section.
        <br/> Make sure to verify your information before submitting changes.</p>
    </div>
    <MainButton :toggle="toggleForm" :color="btnColor" :text="btnText"/>
  </header>
  <AddProduct v-if="showForm" :types="types" :toggle="toggleForm" :addInv="addInv" :findType="findType"/>
</template>

<script>
import MainButton from './MainButton.vue'
import AddProduct from './AddProduct.vue'
export default {
  props: ['types', 'addInv', 'findType'],
  data () {
    return {
      btnText: 'add product',
      btnColor: 'btn-gr-blue',
      showForm: false
    }
  },
  components: {
    MainButton,
    AddProduct
  },
  methods: {
    toggleForm () {
      this.showForm = !this.showForm
      if (this.showForm) {
        this.btnText = 'close'
        this.btnColor = 'btn-gr-red'
      } else {
        this.btnText = 'add product'
        this.btnColor = 'btn-gr-blue'
      }
    }
  }
}
</script>

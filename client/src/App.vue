<template>
  <PageTitle :title="pageTitle + ' | vue-tp2'"/>
  <div class="bg-neutral-200 min-h-screen flex flex-col">
    <Transition name="expand">
      <DialogMessage v-if="message" :message="message" :toggleDialog="toggleDialog"/>
    </Transition>
    <MainNav>
      <MainLogo/>
    </MainNav>
    <div class="text-dark text-text font-archivo flex flex-1 flex-col gap-5">
      <RouterView
        :inventory="inventory"
        :types="types"
        :message="message"
        :addInv="addInventory"
        :removeInv="removeInventory"
        :updateInv="updateInventory"
        :showDialog="showDialog"
        :pageTitle="setTitle"
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
import DialogMessage from './components/DialogMessage.vue'
import PageTitle from './components/PageTitle.vue'
export default {
  components: { MainNav, MainFooter, MainLogo, DialogMessage, PageTitle },
  data () {
    return {
      inventory: [],
      types: [],
      message: false,
      pageTitle: 'app'
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
    TypeDataService.getAll()
      .then(response => {
        this.types = response.data
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  },
  methods: {
    addInventory (product) {
      this.inventory.push(product)
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].description = data.description
      this.inventory[index].price = data.price
      this.inventory[index].type = data.type
    },
    toggleDialog () {
      this.message = false
    },
    showDialog (message) {
      this.message = message
    },
    setTitle (title) {
      this.pageTitle = title
    }
  }
}
</script>
<style>
.expand-enter-active, .expand-leave-active{
  transition: top 0.3s ease-out;
}
.expand-enter-from, .expand-leave-to{
  top: -100px;
}
.expand-enter-to, .expand-leave-from{
  top: 0px;
}
</style>

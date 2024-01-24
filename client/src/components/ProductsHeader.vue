<template>
<header class='flex gap-3 justify-center'>
    <div>
        <h2 class='text-s font-bold'>Consult and modify your products</h2>
        <p class='text-xs'>You can add, update and delete your products in this section.
        <br/> Make sure to verify your information before submitting changes.</p>
    </div>
    <MainButton :toggle="toggle" :color="btnColor" :text="btnText"/>
</header>
</template>

<script>
import MainButton from './MainButton.vue'
export default {
  data () {
    return {
      btnText: 'add product',
      btnColor: 'btn-gr-blue'
    }
  },
  components: {
    MainButton
  }
}
</script>

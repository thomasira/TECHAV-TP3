<template>
  <div class='bg-main-600 flex-1 p-4 py-32 flex justify-center'>
    <div>
      <div class='text-center flex flex-col items-center gap-3'>
        <h1 class='text-xl'>Welcome to <MainLogoInline/></h1>
        <p class='max-w-[600px]'>At By and Buy, we care for all you needs. Come by and get all your most desired products from grills for your patio to Legos for your little imps. We've got it all, come buy, by-and-by!</p>
        <router-link to='/products' class="btn btn-gr-yellow">Come in!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainLogoInline from '@/components/MainLogoInline.vue'
export default {
  components: { MainLogoInline }
}
</script>

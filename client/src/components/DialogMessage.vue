<template>
  <div v-if="message" class="fixed w-full top-0 btn-gr-blue-200 flex py-4 px-6 justify-between items-center z-10 shadow-lg">
    <h3 class="text-m text-white uppercase pl-10">{{ message }}</h3>
    <button class="btn btn-large btn-gr-red font-black" @click="toggleDialog">X</button>
  </div>
</template>

<script>
export default {
  props: ['message', 'toggleDialog']
}
</script>

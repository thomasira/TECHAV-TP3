<template>
  <div v-if="message" class="fixed w-full bottom-0 h-[200px] bg-main-200 flex py-0 px-6 justify-between items-center z-10">
    <h3 class="text-m">{{ message }}</h3>
    <button class="text-huge btn btn-large btn-gr-red" @click="toggleDialog">X</button>
  </div>
</template>

<script>
export default {
  props: ['message', 'toggleDialog']
}
</script>

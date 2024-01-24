<template>
  <button :class="color+' btn'" @click="toggle">{{ text }}</button>
</template>

<script>
export default {
  props: ['toggle', 'text', 'color']
}
</script>

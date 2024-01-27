<script>
export default {
  name: 'vue-title',
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler () {
        document.title = this.title
      }
    }
  }
}
// refs: https://stackoverflow.com/questions/36612847/how-can-i-bind-the-html-title-content-in-vuejs
</script>

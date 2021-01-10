<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  props: {
    testProps: String
  },
  render(h) {
    return h('div', `${this.testProps}`)
  },
  setup() {
    return {
      compositon: ref('api'),
    }
  }
})
</script>

<style>

</style>
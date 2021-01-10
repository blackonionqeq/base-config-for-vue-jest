import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    tsxProp: String
  },
  render(h) {
    return <div>{this.tsxProp}</div>
  }
})
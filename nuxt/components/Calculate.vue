<template>
  <div>
    <button
      type="submit"
      name="calculate"
      class="btn btn-primary"
      @click.prevent="onSubmit"
    >
      CALCULATE
    </button>
    <fieldset class="border p-2 bg-light">
      <legend class="w-auto">result</legend>
      {{ result }}
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Calculate',
  data() {
    return {
      result: null,
    }
  },
  props: {
    input: String,
  },
  methods: {
    onSubmit() {
      this.result = parseInt(this.input) / 100
    },
  },
}
</script>

<style scoped>
div{
  margin-top: 6px;
}
</style>

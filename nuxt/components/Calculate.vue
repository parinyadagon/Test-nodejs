<template>
  <div class="container">
    <input
      type="submit"
      @press="getNumber(event)"
      name="calculate"
      value="CALCULATE"
      class="btn btn-primary"
    />
    <fieldset class="border p-2">
      <legend class="w-auto">result</legend>
      <input-number />
      <div>{{ number }}</div>
    </fieldset>
  </div>
</template>

<script>
export default {
  method: {
    getNumber(inputNumber) {
      this.number = inputNumber
    },
  },
  data() {
    return {
      number: '',
    }
  },
}
</script>

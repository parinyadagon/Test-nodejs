<template>
  <div class="container d-flex h-100">
    <div class="row align-self-center w-100">
      <div class="col-6 mx-auto">
        <div class="jumbotron">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Input Number"
              v-model="form.inputNumber"
            />
          </div>
          <Calculate :input="form.inputNumber" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  margin-top: 50px;
}
</style>

<script>
import Calculate from '@/components/Calculate'

export default {
  components: {
    Calculate,
  },

  data() {
    return {
      form: {
        inputNumber: null,
      },
    }
  },
}
</script>


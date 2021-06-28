<template>
  <div class="container d-flex h-100">
    <div class="row align-self-center w-100">
      <div class="col-6 mx-auto">
        <div class="jumbotron">
          <form>
            <input class="inputNumber" name="inputNumber" type="text" />
            <Calculate />
          </form>
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
  name: 'inputNumber',
  mounted() {
    this.$emit('press', name)
  },
  components: {
    Calculate,
  },
}
</script>


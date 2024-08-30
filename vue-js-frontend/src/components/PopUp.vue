<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  popUpVisible: {
    type: Boolean,
    required: true,
    default: false
  },
  setPopUpVisibility: {
    type: Function,
    required: true
  }
})

const router = useRouter()

const yesButtonHandler = () => {
  router.push('/cart')
}
</script>

<template>
  <div class="PopUp">
    <div class="go-to-class">
      <h1>Go to cart?</h1>
    </div>
    <!-- button controls -->
    <div class="pu-button-container">
      <button class="btn-class" @click="yesButtonHandler">Yes</button>
      <button class="btn-class" @click="props.setPopUpVisibility(false)">
        No, continue shopping
      </button>
    </div>
  </div>
</template>

<style scoped>
.btn-class {
  margin: 10px;
  border-radius: 7px;
  background-color: #fcc000;
  margin: 2rem;
}
.go-to-class {
  margin-left: 7rem;
  margin-top: 2rem;
}
</style>

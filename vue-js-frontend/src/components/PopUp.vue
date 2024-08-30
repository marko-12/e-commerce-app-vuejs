<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  setPopUp: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

const yesButtonHandler = () => {
  router.push('/cart')
}
</script>

<template>
  <div className="PopUp">
    <div className="pu-content-container">
      <h1>Go to cart?</h1>
    </div>
    {/* button controls */}
    <div className="pu-button-container">
      <button class="btn-class">Yes</button>
      <button class="btn-class">No, continue shopping</button>
    </div>
  </div>
</template>

<style scoped>
.btn-class {
  margin: '10px';
  border-radius: '7px';
  background-color: '#fcc000';
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Product from '@/components/Product.vue'
import PopUp from '@/components/PopUp.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const page = 1

onMounted(async () => {
  try {
    const { data } = await axios.get(`/api/products?page=${page}`)
  } catch (error) {
    console.log(error)
  }
})

const popUpVisible = ref(false)
const setPopUpVisibility = (value) => {
  popUpVisible.value = value
}
</script>

<template>
  <h1>Home View</h1>
  <div v-if="popUpVisible" class="flex items-center justify-center h-screen-class">
    <div class="w-80 h-40 bg-gray-200">
      <PopUp :popUpVisible="popUpVisible" :setPopUpVisibility="setPopUpVisibility" />
    </div>
    <!-- <PopUp class="pop-up-class" /> -->
  </div>
</template>

<style scoped></style>

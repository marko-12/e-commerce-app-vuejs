<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Product from '@/components/Product.vue'
import Product1 from '@/components/Product1.vue'
import PopUp from '@/components/PopUp.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useUserInfoStore } from '@/stores/userInfoStore'

const userInfoStore = useUserInfoStore()
const token = userInfoStore.token

onMounted(async () => {
  try {
    console.log(token)
    const { data } = await axios.get(`/api/products_paginated`, {
      headers: { Authorization: `Bearer ${token.access_token}` }
    })
    console.log(data)
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
  <Product1></Product1>
  <div v-if="popUpVisible" class="flex items-center justify-center h-screen-class">
    <div class="w-80 h-40 bg-gray-200">
      <PopUp :popUpVisible="popUpVisible" :setPopUpVisibility="setPopUpVisibility" />
    </div>
    <!-- <PopUp class="pop-up-class" /> -->
  </div>
</template>

<style scoped></style>

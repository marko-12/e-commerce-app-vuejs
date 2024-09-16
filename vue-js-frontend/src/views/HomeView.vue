<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import Product from '@/components/Product.vue'
import PopUp from '@/components/PopUp.vue'
import LoadingBox from '@/components/LoadingBox.vue'
import MessageBox from '@/components/MessageBox.vue'

const route = useRoute()

const products = ref([])
const loading = ref(true)
const error = ref('')
const pages = ref(1)
const popUp = ref(false)

const page = computed(() => route.query.page || 1)
const duringPopUp = computed(() => (popUp.value ? ' during-popup' : ''))

const setPopUp = (value) => {
  popUp.value = value
}

const fetchProducts = async () => {
  loading.value = true
  try {
    const { data } = await axios.get(`/api/products?page=${page.value}`)
    products.value = data.data
    pages.value = data.meta.last_page
    loading.value = false
  } catch (err) {
    error.value = err.message
    loading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div>
    <title>Home Screen</title>
    <h1 style="text-align: center">Current Products</h1>
    <br />
    <div class="products">
      <LoadingBox v-if="loading" />
      <MessageBox v-else-if="error" variant="danger">{{ error }}</MessageBox>
      <div v-else>
        <b-container>
          <PopUp v-if="popUp" :setPopUp="setPopUp" class="center" />
          <b-row :class="duringPopUp">
            <b-col v-for="product in products" :key="product.id" sm="6" md="4" lg="3" class="mb-3">
              <Product :product="product" :setPopUp="setPopUp" />
            </b-col>
          </b-row>
        </b-container>
        <div>
          <RouterLink
            v-for="x in pages"
            :key="x"
            :class="x === Number(page) ? 'btn text-bold' : 'btn'"
            :to="`/?page=${x}`"
          >
            {{ x }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products {
  margin-top: 20px;
}
</style>

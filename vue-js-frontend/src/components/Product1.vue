<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import axios from 'axios'
import { useRouter, RouterLink, RouterView } from 'vue-router'
import Rating from './Rating'
//import { Toast } from 'vue-toastification'

const props = defineProps({
  product: Object,
  setPopUp: Function
})

const cartStore = useCartStore()
const toast = useToast()
const router = useRouter()

const addToCartHandler = async (item) => {
  const existItem = cartStore.cartItems.find((x) => x.id === item.id)
  const quantity = existItem ? existItem.quantity + 1 : 1
  try {
    const { data } = await axios.get(`/api/products/${item.id}`)
    if (data.product.count_in_stock < quantity) {
      toast.error('Sorry the product is out of stock')
      return
    }
    cartStore.addItem({ ...item, quantity })
    props.setPopUp(true)
  } catch (error) {
    toast.error('An error occurred while adding to cart')
  }
}
</script>

<template>
  <div class="card">
    <RouterLink v-if="product.images && product.images[0]" :to="`/product/${product.id}`">
      <img :src="product.images[0].original_url" class="card-img-top" :alt="product.name" />
    </RouterLink>

    <div class="card-body">
      <RouterLink :to="`/product/${product.id}`">
        <h5 class="card-title">{{ product.name }}</h5>
      </RouterLink>
      <Rating :rating="product.rating" :num_of_reviews="product.num_of_reviews" />
      <p class="card-text">${{ product.price }}</p>

      <button v-if="product.count_in_stock <= 0" class="btn btn-light" disabled>
        Out of stock
      </button>
      <button v-else class="btn btn-primary" @click="addToCartHandler(product)">Add to cart</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 0.25rem;
}
.card-img-top {
  width: 100%;
  height: auto;
}
.card-body {
  padding: 1rem;
}
</style>

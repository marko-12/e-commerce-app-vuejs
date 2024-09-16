<script setup>
import axios from 'axios'
import { useRouter, RouterLink, RouterView } from 'vue-router'
import Rating from '@/components/Rating.vue'
//import { Toast } from 'vue-toastification'
import { BCard, BButton } from 'bootstrap-vue-3'
import { useToast } from 'vue-toastification'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { useCartStore } from '@/stores/cartStore'
import { defineProps } from 'vue'

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
    console.log('this should log')
    // const { data } = await axios.get(`/api/products/${item.id}`)
    // if (data.product.count_in_stock < quantity) {
    //   toast.error('Sorry the product is out of stock')
    //   return
    // }
    // cartStore.addItem({ ...item, quantity })
    // props.setPopUp(true)

    // if (window.confirm('Do you want to go to cart?')) {
    //   try {
    //     navigate(`/cart`)
    //   } catch (err) {
    //     getError(err)
    //   }
    // }
  } catch (error) {
    toast.error('An error occurred while adding to cart')
  }
}
</script>

<template>
  <BCard
    :title="product.name"
    :img-src="product.images && product.images[0] ? product.images[0].original_url : ''"
    img-alt="product.name"
    img-top
    class="mb-3"
  >
    <RouterLink :to="`/product/${product.id}`" class="stretched-link">
      <Rating :rating="product.rating" :num_of_reviews="product.num_of_reviews" />
    </RouterLink>
    <p class="mt-3">Price: ${{ product.price }}</p>
    <div>
      <b-button v-if="product.count_in_stock <= 0" variant="light" disabled>
        Out of stock
      </b-button>
      <b-button v-else variant="primary" @click="addToCartHandler(product)"> Add to cart </b-button>
    </div>
  </BCard>
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

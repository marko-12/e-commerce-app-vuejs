<script setup>
import axios from 'axios'
import { BCard } from 'bootstrap-vue-3'
import { useToast } from 'vue-toastification'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { useCartStore } from '@/stores/cartStore'
import { defineProps } from 'vue'

const userStore = useUserInfoStore()
const cartStore = useCartStore()

const toast = useToast()

defineProps({
  product: Object
})

const addToCartHandler = async (item) => {
  const existItem = cartStore.cartItems.find((x) => x.id === product.id)
  const quantity = existItem ? existItem.quantity + 1 : 1
  const { data } = await axios.get(`/api/products/${item.id}`)
  if (data.product.count_in_stock < quantity) {
    toast.error('Sorry the product is out of stock')
    return
  }

  cartStore.cartAddItem(item, quantity)

  //setPopUp(true);

  // if (window.confirm("Do you want to go to cart?")) {
  //   try {
  //     navigate(`/cart`);
  //   } catch (err) {
  //     getError(err);
  //   }
  // }
}
</script>

<template>
  <BCard
    title="Card Title"
    img-src="https://via.placeholder.com/150"
    img-alt="Card image"
    img-top
    img-width="100rem"
    img-height="100rem"
  ></BCard>
</template>

<style scoped></style>

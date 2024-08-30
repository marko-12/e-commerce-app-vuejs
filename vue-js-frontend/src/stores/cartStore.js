import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const shippingAddress = ref(null)
  const paymentMethod = ref(null)
  const cartItems = ref([])

  const saveShippingAddress = (data) => {
    shippingAddress.value = data.shippingAddress
  }

  const savePaymentMethod = (data) => {
    paymentMethod.value = data.paymentMethod
  }

  const cartAddItem = (item, quantity) => {
    cartItems.value.push({ item, quantity })
  }

  const cartClear = () => {
    cartItems.value = []
  }

  return {
    shippingAddress,
    paymentMethod,
    cartItems,
    saveShippingAddress,
    savePaymentMethod,
    cartAddItem,
    cartClear
  }
})

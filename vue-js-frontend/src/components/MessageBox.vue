<template>
  <b-alert :variant="variant" show>
    <slot></slot>
  </b-alert>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'info'
  }
})
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

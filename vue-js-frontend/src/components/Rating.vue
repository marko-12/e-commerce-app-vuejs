<script setup>
const props = defineProps({
  rating: Number,
  num_of_reviews: Number,
  caption: String
})

const getStarClass = (star) => {
  if (props.rating >= star) {
    return 'fas fa-star'
  } else if (props.rating >= star - 0.5) {
    return 'fas fa-star-half-alt'
  } else {
    return 'far fa-star'
  }
}
</script>

<template>
  <div class="rating">
    <span>
      <i :class="getStarClass(1)" />
    </span>
    <span>
      <i :class="getStarClass(2)" />
    </span>
    <span>
      <i :class="getStarClass(3)" />
    </span>
    <span>
      <i :class="getStarClass(4)" />
    </span>
    <span>
      <i :class="getStarClass(5)" />
    </span>
    <span v-if="caption">{{ caption }}</span>
    <span v-else>{{ ' ' + num_of_reviews + ' reviews' }}</span>
  </div>
</template>

<style scoped>
.rating {
  color: #f8e825;
}
</style>

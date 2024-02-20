<template>
  <!-- <NuxtLink :to="url"> -->
    <!-- relative parent needed for absolute positioning of svg badges-->
    <div class="relative">
      <div class="flex flex-row bg-eScienceWhite shadow-xl max-w-xl rounded-bl-3xl rounded-tr-3xl h-48">
        <!-- Module cards -->
        <div class="prose font-display m-4 mr-10">
          <h3>
            {{ title }}
          </h3>
        </div>
        <img :src="thumbnail" alt="module icon" class="max-w-xs rounded-tr-3xl">
      </div>
    </div>
  <!-- </NuxtLink> -->
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    author: {
      type: String,
      default: 'Author'
    },
    thumbnail: {
      type: String,
      default: './public/nlesc-logo.svg'
    },
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>

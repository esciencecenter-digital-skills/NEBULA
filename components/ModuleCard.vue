<template>
  <NuxtLink :to="url">
    <!-- relative parent needed for absolute positioning of svg badges-->
    <div class="relative">
      <!-- Module card -->
      <div class="flex flex-row bg-eScienceWhite shadow-xl max-w-[485px] rounded-bl-3xl rounded-tr-3xl h-48">
        <div class="prose font-display w-2/3 p-4 pr-10">
          <h3>
            {{ title }}
          </h3>
          <p>
            {{ description }}
          </p>
        </div>
        <div class="w-1/3 " >
          <img :src="thumbnail" alt="module icon" class="rounded-tr-3xl object-cover h-48">
        </div>  
      </div>
    </div>
  </NuxtLink>
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
    description: {
      type: String,
      default: 'Description not available'
    },
    thumbnail: {
      type: String,
      default: './nlesc-logo.svg'
    },
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>

<template>
    <NuxtLink :to="url" @click.native="store.modTitle = title" class="z-10">
      <!-- relative parent needed for absolute positioning of svg badges-->
      <div class="relative z-10">
        <!-- Module card -->
        <div class="flex flex-row bg-eScienceWhite shadow-xl max-w-[485px] rounded-bl-3xl rounded-tr-3xl active:border-2 h-48">
          <div class="prose font-display w-2/3 p-4 pr-10">
            <h3>
              {{ title }}
            </h3>
            <p>
              {{ abstract }}
            </p>
          </div>
          <div class="w-1/3 " >
            <img :src="thumbnail" alt="module icon" class="rounded-tr-3xl object-cover h-48">
          </div>  
        </div>
      </div>
    </NuxtLink>
</template>

<script setup>
const store = useMyStore()
</script>

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
    abstract: {
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

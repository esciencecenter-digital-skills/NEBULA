<template>
  <div class="flex flex-col w-screen bg-gentleBlue h-screen overflow-hidden">
        <Banner />
        <div class="flex-1 z-10 overflow-auto">
            <NuxtPage />
        </div>
        <Footer />

        <div class="main-blob z-0 yellow-bottom slide-bottom"></div>
        <div class="main-blob z-0 purple-top slide-top"></div>
    </div>
</template>

<script setup lang="ts">
  // Start of code made with help of Google AI
  const route = useRoute()

  // Check if "receiver" is in the URL query parameters
  const isSpeakerReceiver = computed(() => 'receiver' in route.query)

  // Automatically add the class to <html> on both server and client
  if (isSpeakerReceiver.value) {
    useHead({
      htmlAttrs: {
        class: 'is-speaker-receiver'
      }
    })
  }
  // End of code made with help of Google AI
</script>

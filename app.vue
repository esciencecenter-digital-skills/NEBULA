<script setup lang="ts">
definePageMeta({
  layout: 'moduleLayout'
})
</script>

<template>
  <div>
    <NuxtLayout :name="moduleLayout">
      <NuxtPage />
    </NuxtLayout>
    <!-- This is the app.vue.
    <ContentDoc /> -->
  </div>
</template>

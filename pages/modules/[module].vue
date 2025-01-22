<template>

      <div class="flex flex-col h-full w-full p-5">

          <h2 class="prose-2xl font-display mx-16 font-bold text-eSciencePurple w-full pl-2">
            {{ moduleDoc.title }}
          </h2>
        <ChapterBar/>
        <NuxtPage />  
      </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const moduleDoc = await queryContent('/modules/' + route.params.module + '/').findOne();
</script>
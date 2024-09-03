<template>

      <div class="flex flex-col h-full w-full p-5">

        <ContentDoc v-slot="{ doc }">
            <h2 class="prose-2xl font-display mx-16 font-bold text-eSciencePurple w-full pl-2">
              {{ store.modTitle  }}
            </h2>
        </ContentDoc>
        <ChapterBar/>
        <NuxtPage />  
      </div>
</template>

<script setup lang="ts">
const store = useMyStore()
</script>
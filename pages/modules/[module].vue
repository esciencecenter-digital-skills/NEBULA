<template>
    <NuxtLayout name="module">

      <!-- <div class="flex flex-col h-full w-full p-5">

        <ContentDoc v-slot="{ doc }">
          <h2 class="prose-2xl font-display mx-16 font-bold text-eSciencePurple w-full pl-2">
            Module: {{ doc.title }} <br>
            Module: {{ modObject }}
          </h2>
        </ContentDoc>
        <ChapterBar/> -->
        <template #chapterBar>
          <NuxtPage />
        </template>
        
      <!-- </div> -->
    </NuxtLayout>
</template>

<script setup lang="ts">
  const route = useRoute();
  const modObject = await queryContent('/modules/' + route.params.module )
  console.log("this is", route.params)

</script>

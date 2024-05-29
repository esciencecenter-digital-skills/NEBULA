<template>

  <ContentDoc v-slot="{ doc }">
    <div v-if="doc.type === 'slides'" class='overflow-hidden h-full '>
      <Slides :slidescontent="doc.plainText"/>
    </div>
    
    <div v-else  class="flex justify-center items-center">
      <div class="flex m-4 my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12" >
        <ContentRenderer :value="doc" class="font-body prose-lg max-w-4xl" />
      </div>
    </div>
  </ContentDoc>
</template>

<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig();
  const route = useRoute();
  const chapterList = await queryContent('/modules/' + route.params.module + '/')
    .sort({ order: 1, $numeric: true })
    .find();
  const baseUrl = "/" + runtimeConfig.public.repoName + "/";
</script>

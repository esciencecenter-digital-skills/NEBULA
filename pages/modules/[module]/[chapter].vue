<template>
  <ContentDoc v-slot="{ doc }">
    <div
      class="flex font-body m-4 bg-eScienceWhite"
      :class="{
        'overflow-hidden h-full': doc._extension === 'pmd',
        'justify-center py-8': doc._extension === 'md',
      }"
    >
      <Slides
        v-if="doc._extension === 'pmd'"
        :slidescontent="baseUrl + doc._file"
      />
      <ContentRenderer v-else :value="doc" class="prose-lg max-w-2xl" />
    </div>
  </ContentDoc>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

console.log(runtimeConfig.public.repoName);
const baseUrl = "/" + runtimeConfig.public.repoName + "/";
</script>

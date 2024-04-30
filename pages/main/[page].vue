<template>
  <ContentDoc v-slot="{ doc }">
    <div class="flex font-body m-10 mx-60 bg-eScienceWhite justify-center py-8">
      <ContentRenderer :value="doc" class="prose-lg max-w-2xl" />
    </div>
  </ContentDoc>
</template>
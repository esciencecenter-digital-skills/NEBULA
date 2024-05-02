<template>
  <ContentDoc v-slot="{ doc }" >
    <div class="flex justify-center items-center">
      <div class="flex my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12">
        <ContentRenderer :value="doc" class="font-body prose-lg max-w-4xl" />
      </div>
    </div>
  </ContentDoc>
</template>
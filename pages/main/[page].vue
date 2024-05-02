<template>
  <ContentDoc v-slot="{ doc }" >
    <div class="flex justify-center items-center">
      <div class="flex my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12">
        <ContentRenderer :value="doc" class="font-body prose-lg max-w-4xl" >
          <!-- <h1>{{ doc.body }}</h1> -->
          <ContentRendererMarkdown :value="doc.body" />
        </ContentRenderer>
      </div>
    </div>
  </ContentDoc>
</template>
<template>
    <div class="flex no-wrap text-left ml-20 z-10">
      <div v-for="chapter in chapterList" :key="chapter._path">
        <nuxt-link :to="chapter._path" role="button" class="flex max-h-20 m-4 rounded-bl-xl rounded-tr-xl active:border-2">
            <div class="text-2xl px-1.5 py-3 content-center flex-none rounded-bl-xl   bg-eScienceYellow">
              <img v-if="chapter.type === `info`" src="/icons/info.svg" width="25"></img>
              <img v-else-if="chapter.type === `exercise`" src="/icons/exercise.svg" width="25"></img>
              <img v-else-if="chapter.type === `reading`" src="/icons/reading.svg" width="25"></img>
              <img v-else-if="chapter.type === 'slides'" src="/icons/presentation.svg" width="25"></img>
            </div>
            <div class="p-4 flex-initial text-lg font-display font-semibold rounded-tr-xl shadow-xl bg-gentleBlue  text-eSciencePurple hover:bg-eScienceWhite hover:text-eScienceBlue ">
              {{ chapter.title }}
            </div>
        </nuxt-link>
      </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const chapterList = await queryContent('/modules/' + route.params.module + '/')
    .sort({ order: 1, $numeric: true })
    .find();
</script>
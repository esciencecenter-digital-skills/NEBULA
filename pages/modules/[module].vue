<template>
    <div class="flex flex-col h-full w-full ">

      <!-- Print name of the module by searching for its *.pm file and `title` field -->
      <div class="content-container">
        <ContentList path="/modules" :query="modQuery" v-slot="{ list }">
          <!-- Iterate through the list to find matching modObject -->
          <div v-for="modObject in list.filter(mo => mo._path === $route.path)" :key="modObject.id">
            <h2 class="prose-2xl font-display font-bold text-eSciencePurple w-full pl-2">
              Module {{ modObject.title }}
            </h2>
          </div>
          <!-- Just in case: display a fallback message if the list is empty or no match -->
          <div v-if="list.length === 0 || list.every(mo => mo._path !== $route.path)">
            <p>No module found for this path.</p>
          </div>
        </ContentList>
      </div>

      <div class="flex no-wrap text-left">
        <ContentList :path="'/modules/' + $route.params.module + '/'" v-slot="{ list }">
          <div v-for="chapter in list" :key="chapter._path">
            <nuxt-link :to="chapter._path">
              <div role="button" class="flex-grow text-eSciencePurple hover:bg-eScienceWhite hover:text-eScienceBlue p-4">
                <h2 class="text-lg font-display font-semibold">
                  {{ chapter.title }}
                </h2>
              </div>
            </nuxt-link>
          </div>
        </ContentList>
      </div>

      <NuxtPage />
    </div>
</template>

<!-- Query visible modules only -->
<script setup lang="ts">

    import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

    const runtimeConfig = useRuntimeConfig()

    const modQuery: QueryBuilderParams = { path: '/modules', where: [{ visibility: 'visible' }] }

</script>
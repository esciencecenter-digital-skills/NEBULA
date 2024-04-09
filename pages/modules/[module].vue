<template>
    <div class="flex flex-col h-full w-full bg-gentleBlue">
      <h2 class="prose-2xl font-display font-bold text-eSciencePurple w-full pl-2">
        Module {{$route.params.module}}
      </h2>

      <div class="flex flex-auto no-wrap text-left">
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

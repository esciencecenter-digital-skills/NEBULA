<template>
    <div class="flex p-1 bg-eScienceWhite text-xl items-center text-eSciencePurple z-10">
        <div class="flex flex-1 gap-10 items-center ">
          <NuxtLink :to="`/`">
            <div class="text-2xl leading-6 mx-10 font-bold w-20  hover:text-eScienceBlue active:opacity-50">
              {{ $config.public.title }}
            </div>
          </NuxtLink>
        </div>
        
        <div class="flex align-middle items-center">
          <div class="flex p-5">
            
            <NuxtLink :to="`/`" class="p-5  hover:text-eScienceBlue active:opacity-50">
              Modules
            </NuxtLink>

            <ContentList :path="'/main'"  v-slot="{ list }">
              <nuxt-link v-for="page in list" :key="page._path" :to="page._path" class="p-5  hover:text-eScienceBlue active:opacity-50">
                    {{ page.title }}
              </nuxt-link>
            </ContentList>
            
          </div>
          <NuxtLink to="https://www.github.com/esciencecenter-digital-skills/research-software-support" target="_blank" class=" pl-10">
            <img src="/icons/github-mark.svg" alt="Netherlands eScience Center Logo" width="50px" height="50px" class="align-middle">
          </NuxtLink>
          <NuxtLink to="https://www.esciencecenter.nl" target="_blank" class="px-5">
            <img src="/nlesc-logo.svg" alt="Netherlands eScience Center Logo" width="200px">
          </NuxtLink>
        </div>

    </div>
</template>

<script>
  export default {}
</script>

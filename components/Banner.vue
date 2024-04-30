<template>
    <div class="flex p-5 bg-eScienceWhite text-xl items-center text-eSciencePurple">
        <div class="flex flex-1 gap-10 items-center ">
          <NuxtLink :to="`/`">
            <div class="text-4xl font-bold">
              {{ $config.public.title }}
            </div>
          </NuxtLink>
        </div>
        
        <div class="flex align-middle items-center">
          <div class="p-5">
            <NuxtLink :to="`/about`"  class="p-5">
              About
            </NuxtLink>
            
            <NuxtLink :to="`/`" class="p-5">
              Modules
            </NuxtLink>
          </div>
            <NuxtLink to="https://www.github.com/esciencecenter-digital-skills/research-software-support" target="_blank" class=" pl-10">
              <img src="~/public/github-mark.svg" alt="Netherlands eScience Center Logo" width="50px" height="50px" class="align-middle">
            </NuxtLink>
        </div>

    </div>
</template>

<script>
  export default {}
</script>

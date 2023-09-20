<template>
  <div class="flex flex-row bg-eScienceWhite">
    <div class="flex p-5 items-center">
      <NuxtLink :to="`/`">
        <img src="~/public/nlesc-logo.svg" alt="Netherlands eScience Center Logo" width="250px">
      </NuxtLink>
    </div>
    <div class="flex font-display font-semibold pt-12 pl-10">
      <div v-if="$route.path === '/'">
        <h1 class="text-4xl text-eSciencePurple">
          {{ $config.public.title }} Lessons
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

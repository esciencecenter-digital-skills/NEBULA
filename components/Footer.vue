<template>
    <!-- <div class="decoration-slice bg-gentleBlue p-4" /> -->
    <div id="footer" class="bg-eSciencePurple p-2 font-body text-eScienceWhite text-sm text-center z-10">
      <div class="text-center">
        These materials are developed by the <NuxtLink :to="`${config.organizationURL}`" target="_blank"> {{ config.organization}}</NuxtLink>. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a> unless otherwise noted.
      </div>

    </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig().public
</script>

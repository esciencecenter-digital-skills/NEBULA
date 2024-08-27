<template>
  <div class="flex flex-col w-screen bg-gentleBlue h-screen overflow-hidden">
        <Banner />
        <div class="flex-1 z-10 overflow-auto">
            <NuxtPage />
        </div>            
        <Footer />
        
        <div class="main-blob z-0 yellow-bottom slide-bottom"></div>
        <div class="main-blob z-0 purple-top slide-top"></div>
    </div>
</template>

<script setup lang="ts">

</script>

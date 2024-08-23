<template>
    <div class="flex flex-col pt-4 pb-6 pl-6 ml-16">
            <!-- categories -->
            <div v-for='category in config.categoryOrder' :key="category" class="flex flex-wrap gap-4 mb-8">
                <h2 class="prose-2xl font-display font-bold text-eSciencePurple w-full pl-2 z-10">
                {{ category }}
                </h2>
                <!-- modules -->
                <ContentList :query="modQuery" v-slot="{ list }">
                    <ModuleCard v-for="modObject in list.filter(modObject => (modObject.category === category))"
                        :key="modObject.id"
                        :title="modObject.title"
                        :author="modObject.author"
                        :abstract="modObject.abstract"
                        :thumbnail="`/${config.baseURL}/${modObject._path}/media/${modObject.thumbnail}`"
                        :url="`${modObject._path}/info`"
                    />
                </ContentList>
            </div>
        </div>
        <div class="main-blob yellow-bottom slide-bottom transition-all"></div>
        <div class="main-blob purple-top slide-top"></div>

</template>
  
<script setup lang="ts">

    import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
    
    const config = useRuntimeConfig().public
   
    const modQuery: QueryBuilderParams = { 
        path: '/modules', 
        where: [{ visibility: 'visible' }], 
        sort: [{ order:1, $numeric:true }] 
    }
         
</script>

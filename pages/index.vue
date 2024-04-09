<template>
    <div class="flex flex-col pt-4 pb-6 pl-6">
            <!-- categories -->
            <div v-for='category in runtimeConfig.public.categoryOrder' :key="category" class="flex flex-wrap gap-4 mb-8">
                <h2 class="prose-2xl font-display font-bold text-eSciencePurple w-full pl-2">
                {{ category }}
                </h2>
                <!-- modules -->
                <ContentList path="/modules" :query="modQuery" v-slot="{ list }">
                    <ModuleCard v-for="modObject in list
                            .filter(modObject => (modObject.category === category && modObject.visibility === 'visible'))
                            .sort((a, b) => a.id - b.id)"
                        :key="modObject.id"
                        :title="modObject.title"
                        :author="modObject.author"
                        :thumbnail="`/${runtimeConfig.public.repoName}/${modObject._path}/media/${modObject.thumbnail}`"
                        :url="modObject._path"
                    />
                </ContentList>
            </div>
    </div>
</template>
  
<script setup lang="ts">

    import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
    
    const runtimeConfig = useRuntimeConfig()

    const {
        // Global references
        globals,
        navigation,
        surround,
        page,
        // Computed properties from `page` key
        excerpt,
        toc,
        type,
        layout,
        // Computed properties from `surround` key
        next,
        prev
    } = useContent()

    console.log(globals);
    
    const modQuery: QueryBuilderParams = { path: '/modules', where: [{ visibility: 'visible' }] }

           
</script>

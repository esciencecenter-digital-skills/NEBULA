<template>
    <div class="flex flex-col w-screen bg-gentleBlue h-screen overflow-auto">
        <Banner />
        <!-- <input v-model="query" type="search" class="w-2/3 mt-4 mr-4 p-2 self-end" placeholder="search"> -->
        <div class="flex flex-col pt-4 pb-6 pl-6">
        <!-- categories -->
        <div v-for='category in ["Getting Started", "Reusability", "Resources"]' :key="category" class="flex flex-wrap gap-4 mb-8">
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
                    :thumbnail="`/NEBULA/${modObject._path}/media/${modObject.thumbnail}`"
                    :url="modObject._path"
                />
            </ContentList>
        </div>
        </div>
        <Footer />
    </div>
</template>
  
<script setup lang="ts">

    import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
    
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

    console.log(globals)
    
    const modQuery: QueryBuilderParams = { path: '/modules', where: [{ visibility: 'visible' }] }
//   import '../layouts/style.scss'

    // export default {
    //     async asyncData (context) {
    //         const stories = await context.$content()
    //             .only(['id', 'slug', 'title', 'author', 'thumbnail', 'category', 'visibility'])
    //             .fetch()
    //             .catch(e => console.log(e))

    //         const categories = stories
    //             .filter(module => module.visibility === 'visible')
    //             .map(module => module.category)
    //             .filter((v, i, a) => a.indexOf(v) === i)
    //             .sort((a, b) => {
    //             return context.$config.categoryOrder.indexOf(a) - context.$config.categoryOrder.indexOf(b)
    //             })

    //         return { stories, categories }
    //     },
    //     data () {
    //         return {
    //             query: ''
    //         }
    //     },
    //     watch: {
    //         async query (query) {
    //             this.stories = await this.$content()
    //             .only(['id', 'slug', 'title', 'author', 'thumbnail', 'category'])
    //             .search(query)
    //             .fetch()
    //             .catch(e => console.log(e))
    //         }
    //     }
    // }


</script>
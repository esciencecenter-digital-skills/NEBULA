<template>
    <main>
      <div class="flex flex-auto justify-end overflow-auto p-4 bg-gentleBlue font-body h-full w-full">
        <div class="flex-auto w-full overflow-auto">
            <ContentDoc v-slot="{ doc }">
                <div v-if="doc._extension==='pmd'">
                    <Slides :slidescontent="baseUrl + doc._file"/>
                </div>
                <div v-else>
                    <ContentRenderer :value="doc" class="prose mb-6" />
                </div>
            </ContentDoc>
        </div>
      </div>
    </main>


</template>

<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig()

    console.log(runtimeConfig.public.repoName);
    const baseUrl = "/" + runtimeConfig.public.repoName + "/"

</script>

<template>

    <div class="flex flex-col h-full w-full p-5">
        <slot name="header">
            <ContentDoc v-slot="{ doc }">
                <h2 class="prose-2xl font-display mx-16 font-bold text-eSciencePurple w-full pl-2">
                    Module: {{ doc.title }} <br>
                    Module: {{ route.params.module._file }}
                </h2>
            </ContentDoc>
            <ChapterBar/>
        </slot>
      <slot />
    </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const content = useContent();
  const modObject = await queryContent('/modules/' + route.params.module );
  console.log("this is", content.type);

</script>
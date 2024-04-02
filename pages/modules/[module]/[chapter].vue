<template>
    <main>
      <div class="flex-initial p-4 w-1/3 bg-white rounded overflow-auto">
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" class="prose mb-6" />
        </ContentDoc> 
      </div>
    </main>
</template>

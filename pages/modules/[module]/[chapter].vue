<template>
    <main>
      <div class="flex flex-auto overflow-auto p-4 bg-gentleBlue font-body h-full w-full">
        <div class="flex-initial bg-white p-4 w-1/3 rounded overflow-auto">
            <ContentDoc v-slot="{ doc }">
                <ContentRenderer :value="doc" class="prose mb-6 max-w-none" />
            </ContentDoc>
        </div>
      </div>
    </main>


</template>

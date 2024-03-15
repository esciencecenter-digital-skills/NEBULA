<template>
    <main>
      <div class="flex-initial p-4 w-1/3 bg-white rounded overflow-auto">
        <ContentDoc v-slot="{ doc }">
          <article>
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc> 
      </div>
    </main>
</template>

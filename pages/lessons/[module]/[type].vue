<template>
    <main>
        <ContentDoc />
        This was a file of the type: {{ $route.params.type }}.

        <nuxt-link :to="`/lessons/${$route.params.module}`">Back to lesson</nuxt-link>.
    </main>
</template>
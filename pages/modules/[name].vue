<template>
    <main>
        <ContentDoc />

        This modules contains:

        <ul>
            <li><nuxt-link :to="`/modules/${$route.params.name}/exercise`">Exercise</nuxt-link></li>
            <li><nuxt-link :to="`/modules/${$route.params.name}/presentation`">Presentation</nuxt-link></li>
            <li><nuxt-link :to="`/modules/${$route.params.name}/reading`">Reading</nuxt-link></li>
        </ul>


        <!-- <ul>
            <li v-for="file in files" :key="file">
                <nuxt-link :to="`/modules/${$route.params.name}/${file}`">{{ file }}</nuxt-link> <br />
            </li>
        </ul> -->
    </main>
</template>
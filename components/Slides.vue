<template>
    <div class="w-full box-border h-screen">
        <div class="reveal">
            <div class="slides">
                <section :data-markdown="'/NEBULA/' + slidescontent" data-separator="^\r?\n---\r?\n$" data-separator-notes="^Note:" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
      props: {
        slidescontent: {
          type: String,
          default: 'Missing Document'
        }
      }
}
</script>

<script setup lang="ts">
    
    import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js'

    import RevealNotes from 'reveal.js/plugin/notes/notes.js'
    import RevealMath from 'reveal.js/plugin/math/math.js'
    import Search from 'reveal.js/plugin/search/search.esm.js'
    import Decorations from '~/layouts/nlesc-decorations.js'

    onMounted(() => {
        console.log('Slides Mounted');

        // On client side only, dynamically load reveal.js
        // (Importing statically causes errors during server side rendering)
        if (process.browser) {                 
                import('reveal.js')
                    .then((revealModule) => {
                        console.log('Check', revealModule);

                        const deck = new revealModule.default();
                        deck.initialize({
                            controls: true,
                            progress: true,
                            center: true,
                            hash: true,
                            transition: 'none',
                            embedded: true,
                            showNotes: true,
                            plugins: [RevealMarkdown, RevealMath, RevealNotes, Decorations, Search]
                      });
 
                        console.log('Check', deck);

                    });
            }
    });
</script>

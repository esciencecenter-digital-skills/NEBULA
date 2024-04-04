<template>
    <div class="w-full box-border h-screen">
        <h1>SLIDES?</h1>
        <div class="reveal">
            <div class="slides">
                <section :data-markdown="presentation.md" data-separator="^\r?\n---\r?\n$" data-separator-notes="^Note:" />
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
    import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js'

    import RevealNotes from 'reveal.js/plugin/notes/notes.js'
//    import RevealMath from 'reveal.js/plugin/math/math.js'
    import Search from 'reveal.js/plugin/search/search.esm.js'
    import Decorations from '~/layouts/nlesc-decorations.js'

  
    onMounted(() => {
        console.log('Slides Mounted');

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
                            plugins: [RevealMarkdown, RevealNotes, Decorations, Search]
                      });
 
                        console.log('Check', deck);

                        

                        //var fns = Object.getOwnPropertyNames(revealModule.default).filter(function(property) {
                        //        return typeof revealModule.default[property] == 'function';
                        //    });

    //                    const deck = new revealModule.Reveal();
    //                    deck.initialize();
                    });
            }
    });
</script>

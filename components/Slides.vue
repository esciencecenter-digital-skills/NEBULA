<template>
    <div class="flex-auto w-full overflow-auto">
        <h1>SLIDES?</h1>
        <div class="reveal">
            <div class="slides">
                <!--<section :data-markdown="presentation.md" data-separator="^\r?\n---\r?\n$" data-separator-notes="^Note:" /> -->
                <section>Slide 1</section>
                <section>Slide 2</section>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    

//    import 'reveal.js/dist/reveal.css';
//    import '/layouts/nlesc-decorations.scss';
  
    onMounted(() => {
        console.log('Slides Mounted');

        if (process.browser) { 

                
                import('reveal.js')
                    .then((revealModule) => {
                        console.log('Check', revealModule);

                        const deck = new revealModule.default();
                        deck.initialize();

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

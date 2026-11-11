<template>
  <div class="flex relative box-border h-full reveal bg-eScienceWhite z-10">
    <div class="slides flex h-full w-full">
      <section
        data-markdown
        data-separator="^\r?\n===\r?\n$"
        data-separator-vertical="^\r?\n==\r?\n$"
        data-separator-notes="^Note:"
      >
      {{ stripFrontmatter(slidescontent) }}
      </section>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    slidescontent: {
      type: String,
      default: "Missing Document",
    },
  },
  methods: {
    /**
      Takes a string containing raw markdown (mdstr) and returns it with
      the yaml frontmatter removed. It does this by deleting the first
      instance of text between "---" separators. Currently this means that
      if the markdown file is missing the frontmatter, this function will
      probably remove the first slide (since reveal.js defaults to "---"
      as a slides separator.
    */
    stripFrontmatter (mdstr) {
      return mdstr.replace(/^---$.*?^---$/ms, '');
    },
  },
};


</script>


<script setup lang="ts">
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";

import RevealNotes from "reveal.js/plugin/notes/notes.js";
import Search from "reveal.js/plugin/search/search.esm.js";
import Escience from "escience_theme";

const revealRef = ref(null);

// Theme styles are imported dynamically so they load with a deck only. A
// static import would put them in the CSS chunk of every chapter page,
// exercises included. Loaded one after another because order matters:
// escience.css overrides the black theme.
async function loadThemeStyles() {
  await import("reveal.js/dist/theme/black.css");
  await import("reveal.js/plugin/highlight/monokai.css");
  await import("escience_theme/escience.css");
}

onMounted(() => {
  console.log("Slides Mounted");

  // On client side only, dynamically load reveal.js
  // (Importing statically causes errors during server side rendering)
  // For different (unclear) reasons, importing RevealMath alongside
  // the other plugins causes a "Plugin not found" error if the page
  // is reloaded. Therefore it is also imported async here.
  if (process.browser) {
    loadThemeStyles().then(() => import("reveal.js")).then((revealModule) => {
      import("reveal.js/plugin/math/math.esm.js").then((RevealMath) => {
        const deck = new revealModule.default();
        revealRef.value = deck;
        deck.initialize({
          controls: true,
          progress: true,
          center: true,
          hash: true,
          transition: "none",
          embedded: true,
          showNotes: true,
          plugins: [ RevealMarkdown, RevealMath.default, RevealNotes, Search, Escience ],
        });
      });
    });
  }
});

onUnmounted(() => {
  if (revealRef.value && revealRef.value.destroy) {
    // https://revealjs.com/initialization/#destroy
    revealRef.value.destroy();
  }
});
</script>

<template>
  <div class="flex relative box-border h-full reveal">
    <div class="slides flex h-full w-full">
      <section
        data-markdown
        data-separator="^\r?\n---\r?\n$"
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
    stripFrontmatter (mdstr) {
      return mdstr.replace(/^---$.*?^---$/ms, '');
    },
  },
};
</script>

<script setup lang="ts">
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";

import RevealNotes from "reveal.js/plugin/notes/notes.js";
//    import RevealMath from 'reveal.js/plugin/math/math.js'
import Search from "reveal.js/plugin/search/search.esm.js";
import Decorations from "~/layouts/nlesc-decorations.js";

onMounted(() => {
  console.log("Slides Mounted");

  // On client side only, dynamically load reveal.js
  // (Importing statically causes errors during server side rendering)
  if (process.browser) {
    import("reveal.js").then((revealModule) => {
      console.log("Check", revealModule);

      const deck = new revealModule.default();
      deck.initialize({
        controls: true,
        progress: true,
        center: true,
        hash: true,
        transition: "none",
        embedded: true,
        showNotes: true,
        plugins: [RevealMarkdown, RevealNotes, Decorations, Search],
      });

      console.log("Check", deck);
    });
  }
});
</script>

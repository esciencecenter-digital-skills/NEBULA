<template>
  <div class="flex relative box-border h-full reveal">
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
//    import RevealMath from 'reveal.js/plugin/math/math.js'
import Search from "reveal.js/plugin/search/search.esm.js";
import Decorations from "~/assets/ole_decorations/escience_5.1.0.js";

onMounted(() => {
  console.log("Slides Mounted");

  // On client side only, dynamically load reveal.js
  // (Importing statically causes errors during server side rendering)
  if (process.browser) {
    import("reveal.js").then((revealModule) => {
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
    });
  }
});
</script>

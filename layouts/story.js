import 'reveal.js/dist/reveal.css'
import './nlesc-decorations.scss'
import Reveal from 'reveal.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'
import RevealMath from 'reveal.js/plugin/math/math.js'
import Search from 'reveal.js/plugin/search/search.esm.js'
import Decorations from './nlesc-decorations.js'

export default {
  async asyncData ({ $content, params }) {
    const story = await $content(params.story).fetch()
    const chapters = story.body.children
      .filter(child => child.tag === 'chapter')
      .map((child) => {
        return { body: { children: child.children }, props: child.props }
      })
    const headlines = chapters.map(chapter => chapter.props.headline)
    return { params, story, headlines, chapters }
  },
  data () {
    return {
      error: false,
      currentChapter: 0,
      showBigImage: false
    }
  },
  mounted () {
    this.chapters.forEach((chapter, idx) => {
      if (chapter.props.presentation) {
        const deck = new Reveal(
          document.querySelector('#deck' + idx),
          {
            controls: true,
            progress: true,
            center: true,
            hash: true,
            transition: 'none',
            embedded: true,
            showNotes: true,
            plugins: [RevealMarkdown, RevealMath, RevealNotes, Decorations, Search]
          })
        deck.initialize()
      }
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeBigImage()
      }
    })
  },
  methods: {
    getContent (path) {
      return `stories/_${this.params.story}/${path}`
    },
    toggleChapter (i) {
      this.currentChapter = i
    },
    openBigImage () {
      this.showBigImage = true
    },
    closeBigImage () {
      this.showBigImage = false
    }
  }
}

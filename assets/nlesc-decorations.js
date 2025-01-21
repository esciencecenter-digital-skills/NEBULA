// decorations.js
//
// This plugin inserts decorations into the reveal-viewport element on load.
// Visibility of decorations is controlled through data-state attribute of a
// section element, e.g.
// <section data-state="yellow-strip">
// will toggle the yellow-strip element.
//
// Element styles are defined in nlesc-decorations.scss

export default {
  id: 'decorations',
  init: (deck) => {
    initDecorations(deck)
  }
}

function initDecorations (deck) {
  const reveal = deck.getRevealElement()
  const style = useRuntimeConfig().public.style;
  const decorations = document.createElement('div')
  decorations.setAttribute('id', 'decorations')
  decorations.innerHTML = `
  <div id="overlay"></div>
  <div id="blue-pane"></div>
  <div id="purple-half-circle-top"></div>
  <div id="purple-half-circle-bottom"></div>
  <div id="yellow-strip"></div>
  <div id="yellow-half-strip"></div>
  <div id="touch-pane"><h3> </h3></div>
  <div id="empowering"><h3>“Empowering researchers across all disciplines through innovative research software”</h3></div>
  <div id="logo-color"><img src="/styles/${style}/logo-fc.svg"></div>
  <div id="logo-part-white"><img src="/styles/${style}/logo-fc-part-white.svg"></div>
  <div id="logo-white"><img src="/styles/${style}/logo-fc-white.svg"></div>
  <div id="yellow-flag"><img class="left-e" src="/styles/${style}/e-logo.svg"></img></div>
  <div id="purple-half-circle-logo"><img class="logo" src="/styles/${style}/logo-fc-part-white.svg"></img></div>
  <div id="blue-strip"><div id="footer"></div></div>
  <img id="right-e" src="/styles/${style}/letter-e.svg"></img>
  <img id="left-e" src="/styles/${style}/e-logo.svg"></img>
  <div id="purple-blob">
    <div class="blob1"></div>
    <div class="blob2"></div>
    <div class="box"></div>
  </div>
  <div id="globe"><img src="/styles/${style}/globe.png"></img></div>
  <div id="mail"><img src="/styles/${style}/mail.png"></img></div>
  <div id="phone"><img src="/styles/${style}/phone.png"></img></div>
  `
  reveal.prepend(decorations)
}

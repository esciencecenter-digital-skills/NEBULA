// TODO: Remove JQuery dependency (or add integrity check)
import 'https://code.jquery.com/jquery-3.4.1.min.js'

export default {
  id: 'decorations',
  init: (deck) => {
    initDecorations(deck)
  }
}

// TODO: Refactor this quick hack into a Reveal plugin form (it works at least)
function initDecorations (Reveal) {

const decoration_elements = `
<div id="blue_pane_left" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 0; right: 50%; bottom: 0; top: 0; z-index: 2;"></div>
<div id="blue_pane_right" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 50%; right: 0; bottom: 0; top: 0; z-index: 2;"></div>
<div id="touch_pane" style="background-color: white; transition: opacity 1s; opacity: 0; position: absolute; left: 0; right: 66.6%; bottom: 0; top: 0; display: flex; align-items: center; justify-content: center; z-index: 2;">
  <h1 style="color: black; text-align: left;">Let's stay<br>in touch</h1>
</div>
<div id="purple_half_circle_top" style="transition: top 1s; opacity: 1; position: absolute; background-color: var(--nlesc-purple); left: 0; top: -17vw; width: 34vw; height: 17vw; border-radius: 0 0 20vw 20vw; z-index: 2;"></div>
<div id="yellow_half_strip" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-yellow); right: 50%; bottom: -25vw; width: 17vw; height: 25vw; border-radius: 20vw 0 0 0; z-index: 2;"></div>
<div id="purple_strip_bottom" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-purple); right: calc(50% + 17vw); bottom: -10vw; width: 16vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2;"></div>
<div id="logo_color" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
  <img style="width: 12vw;" src="./files/logo-fc.svg">
</div>
<div id="logo_part_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
  <img style="width: 12vw;" src="./files/logo-fc-part-white.svg">
</div>
<div id="logo_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
  <img style="width: 12vw;" src="./files/logo-fc-white.svg">
</div>
<div id="purple_overlay" style="background-color: var(--nlesc-purple); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="blue_overlay" style="background-color: var(--nlesc-blue); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="white_overlay" style="background-color: white; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="black_overlay" style="background-color: black; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="yellow_strip" style="background-color: var(--nlesc-yellow); transition: left 1s; width: 10vw; height: 70vh; border-radius: 10vw 10vw 0 0; z-index: 2; position: absolute; left: -10vw; bottom: 0;">
</div>
<div id="yellow_flag" style="background-color: var(--nlesc-yellow); transition: left 1s, bottom 1s; width: 10vh; height: 12vh; border-radius: 0 6vh 6vh 0; z-index: 3; position: absolute; left: -10vh; bottom: 5vh; margin: 0; padding: 0;">
  <img id="left_e" src="./files/e-logo.svg" style="position: absolute; height: 10vh; margin: 1vh 0; padding: 0;"></img>
</div>
<div id="purple_half_circle_bottom" style="transition: bottom 1s; background-color: var(--nlesc-purple); width: 20vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2; position: absolute; left: 0; bottom: -10vw;">
  <img id="left_e" src="./files/logo-fc-part-white.svg" style="position: absolute; bottom: 2vw; left: 6vw; width: 8vw;"></img>
</div>
<div id="purple_blob" style="transition: top 1s; position: absolute; display: flex; right: 0; top: -50vh; z-index: 2;">
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 25vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 50vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div class="box" style="background: var(--nlesc-purple); position: absolute; right: 10vw; top: 0; width: 5vw; height: calc(25vh + 5vw); border-corner-shape: scoop; background: yellow; background: linear-gradient(45deg,  transparent 10vw, var(--nlesc-purple) 0) bottom left; background-image: radial-gradient(circle at 0 100%, rgba(204,0,0,0) 5vw, var(--nlesc-purple) 15px)">
  </div>
</div>
<div id="blue_strip" style="background-color: var(--nlesc-blue); transition: left 1s, right 1s; margin: 0; padding: 0; border-radius: 20vw 0 0 0; z-index: 2; position: absolute; right: -100vw; bottom: 0;">
  <div id="footer" style="text-align: right; line-height: 130%; padding: 0; margin: 1vw 1vw 1vw 3vw; bottom: 0; right: 0;">
  </div>
</div>
<img id="right_e" src="./files/letter-e.svg" style="transition: right 1s, top 1s; position: absolute; top: 10vh; right: -4vw; width: 4vw; z-index: 3;"></img>
`

let root = document.documentElement;

function insertDecoration() {
  const contentDiv = document.getElementsByClassName("reveal");
  for (let i = 0; i < contentDiv.length; i++) {
    contentDiv[i].insertAdjacentHTML("afterbegin", decoration_elements);
  };
  addDecorations();
}

Reveal.on( 'ready', event => {
  insertDecoration();

  /* set events only after reveal is ready */
  Reveal.on( 'slidechanged', event => {
    if (overview_shown == false)
    {
      console.log("slide changed");
      addDecorations();
    }
  });
  Reveal.on( 'overviewshown', event => {
    overview_shown = true;
    removeDecorations();
  });
  Reveal.on( 'overviewhidden', event => {
    overview_shown = false;
    addDecorations();
  });
} );


var decoration = $('#decoration').html();
console.log("decoration: ", decoration);
if ( window.location.search.match( /print-pdf/gi ) ) {
  // for pdf export
  // 3. On Reveal.js ready event, copy decoration <div> into each `.slide-background` <div>
  Reveal.addEventListener( 'ready', function( event ) {
    $('.slide-background').append(decoration);
  });
}
else {
  // for viewing slides
  $('div.reveal').append(decoration);
  //$('#decoration').remove(); // without this the fadeIn/fadeOut below does not work. why is this necessary?
};
function setLogoStyle(style) {
  //style must be one of {"logo_color","logo_white","logo_part_white"}

  //unset everything
  document.getElementById("logo_color").style.opacity = 0;
  document.getElementById("logo_white").style.opacity = 0;
  document.getElementById("logo_part_white").style.opacity = 0;

  //set only what we want
  document.getElementById(style).style.opacity = 1;
};
var overview_shown = false;
function getOpacity(data_state) {
  var opacity = 0.8;
  for (let i = 0; i < 11; i++) {
    if (data_state.includes(i)) { opacity = i/10; console.log("opacity set to " + opacity)}
  };
  return opacity
};
function addDecorations() {
  console.log("set decorations")

  var currentSlide = Reveal.getCurrentSlide();
  if (currentSlide.contains(currentSlide.querySelector('footer')))
  {
    document.getElementById("footer").innerHTML = currentSlide.querySelector('footer').innerHTML;
    document.getElementById("blue_strip").style.right = 0;
    console.log("footer (and blue_strip)");
  } else {
    document.getElementById("blue_strip").style.right = "-" + document.getElementById("blue_strip").offsetWidth + "px";
    console.log("no footer");
  };
  if ( currentSlide.getAttribute('data-state') )
  {
    var data_state = currentSlide.getAttribute('data-state')
    var opacity = getOpacity(data_state);
    console.log("DS" + data_state)
    // pre-set slide designs

    // standard
    if ( data_state.includes("standard"))
    {
      data_state += " logo yellow_flag white_overlay";
    };

    // two_pane
    if ( data_state.includes("two_pane"))
    {
      data_state += " logo yellow_flag white_overlay blue_pane_right";
    };

    // about
    if ( data_state.includes("about"))
    {
      data_state += " logo white_overlay blue_pane_left purple_half_circle_top purple_strip_bottom yellow_half_strip";
    };

    // touch
    if ( data_state.includes("touch"))
    {
      data_state += " logo blue_overlay touch_pane purple_blob right_e_bottom";
    };

    // individual elements

    // purple overlay
    if ( data_state.includes("purple_overlay"))
    {
      document.getElementById("purple_overlay").style.opacity = opacity;
      document.getElementById("purple_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 1;
      currentSlide.classList.remove("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-yellow)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-blue)");
      console.log("purple overlay");
    } else {
      document.getElementById("purple_overlay").style.opacity = 0;
      console.log("no purple overlay");
    };

    // white overlay
    if ( data_state.includes("white_overlay"))
    {
      document.getElementById("white_overlay").style.opacity = opacity;
      document.getElementById("white_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 1;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 0;
      currentSlide.classList.add("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-blue)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-yellow)");
      console.log("white overlay");
    } else {
      document.getElementById("white_overlay").style.opacity = 0;
      console.log("no white overlay");
    };

    // black overlay
    if ( data_state.includes("black_overlay"))
    {
      document.getElementById("black_overlay").style.opacity = opacity;
      document.getElementById("black_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 0;
      document.getElementById("logo_part_white").style.opacity = 1;
      currentSlide.classList.remove("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-yellow)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-blue)");
      console.log("black overlay");
    } else {
      document.getElementById("black_overlay").style.opacity = 0;
      console.log("no black overlay");
    };

    // blue overlay
    if ( data_state.includes("blue_overlay"))
    {
      document.getElementById("blue_overlay").style.opacity = opacity;
      document.getElementById("blue_overlay").style.transform = "translateY(0)";
      document.getElementById("logo_color").style.opacity = 0;
      document.getElementById("logo_white").style.opacity = 1;
      document.getElementById("logo_part_white").style.opacity = 0;
      currentSlide.classList.remove("has-light-background");
      root.style.setProperty("--link-color", "var(--nlesc-yellow)");
      root.style.setProperty("--link-color-hover", "var(--nlesc-purple)");
      console.log("blue overlay");
    } else {
      document.getElementById("blue_overlay").style.opacity = 0;
      console.log("no blue overlay");
    };

    // blue pane right
    if ( data_state.includes("blue_pane_right"))
    {
      document.getElementById("blue_pane_right").style.opacity = 1;
      document.getElementById("blue_pane_right").style.transform = "translateY(0)";
      currentSlide.classList.remove("has-dark-background");
      currentSlide.classList.add("has-light-background");
      console.log("blue_pane_right");
    } else {
      document.getElementById("blue_pane_right").style.opacity = 0;
      console.log("no blue_pane_right");
    };

    // blue pane left
    if ( data_state.includes("blue_pane_left"))
    {
      document.getElementById("blue_pane_left").style.opacity = 1;
      document.getElementById("blue_pane_left").style.transform = "translateY(0)";
      setLogoStyle("logo_white");
      currentSlide.classList.remove("has-dark-background");
      currentSlide.classList.add("has-light-background");
      console.log("blue_pane_left");
    } else {
      document.getElementById("blue_pane_left").style.opacity = 0;
      console.log("no blue_pane_left");
    };

    // touch pane
    if ( data_state.includes("touch_pane"))
    {
      document.getElementById("touch_pane").style.opacity = 1;
      document.getElementById("touch_pane").style.transform = "translateY(0)";
      setLogoStyle("logo_color");
      currentSlide.classList.remove("has-light-background");
      currentSlide.classList.add("has-dark-background");
      console.log("touch_pane");
    } else {
      document.getElementById("touch_pane").style.opacity = 0;
      console.log("no touch_pane");
    };

    // logo
    if ( data_state.includes("logo"))
    {
      document.getElementById("logo_color").style.left = 3 + "vw";
      document.getElementById("logo_part_white").style.left = 3 + "vw";
      document.getElementById("logo_white").style.left = 3 + "vw";
      console.log("logo");
    } else {
      document.getElementById("logo_color").style.left = -12 + "vw";
      document.getElementById("logo_part_white").style.left = -12 + "vw";
      document.getElementById("logo_white").style.left = -12 + "vw";
      console.log("no logo");
    };

    // yellow strip
    if ( data_state.includes("yellow_strip"))
    {
      document.getElementById("yellow_strip").style.left = 0;
      console.log("yellow_strip");
    } else {
      document.getElementById("yellow_strip").style.left = -10 + "vw";
      console.log("no yellow_strip");
    };

    // yellow flag
    if ( data_state.includes("yellow_flag"))
    {
      document.getElementById("yellow_flag").style.left = 0;
      console.log("yellow_flag");
    } else {
      document.getElementById("yellow_flag").style.left = -10 + "vh";
      console.log("no yellow_flag");
    };

    // purple half circle top
    if ( data_state.includes("purple_half_circle_top"))
    {
      document.getElementById("purple_half_circle_top").style.top = 0;
      setLogoStyle("logo_part_white");
      console.log("purple_half_circle_top");
    } else {
      document.getElementById("purple_half_circle_top").style.top = -17 + "vw";
      console.log("no purple_half_circle_top");
    };

    // purple half circle bottom
    if ( data_state.includes("purple_half_circle_bottom"))
    {
      document.getElementById("purple_half_circle_bottom").style.bottom = 0;
      document.getElementById("yellow_flag").style.bottom = 20 + "vh";
      console.log("purple_half_circle_bottom");
    } else {
      document.getElementById("purple_half_circle_bottom").style.bottom = -10 + "vw";
      document.getElementById("yellow_flag").style.bottom = 5 + "vh";
      console.log("no purple_half_circle_bottom");
    };

    // purple strip bottom
    if ( data_state.includes("purple_strip_bottom"))
    {
      document.getElementById("purple_strip_bottom").style.bottom = 0;
      console.log("purple_strip_bottom");
    } else {
      document.getElementById("purple_strip_bottom").style.bottom = -10 + "vw";
      console.log("no purple_strip_bottom");
    };

    // yellow_half_strip
    if ( data_state.includes("yellow_half_strip"))
    {
      document.getElementById("yellow_half_strip").style.bottom = 0;
      console.log("yellow_half_strip");
    } else {
      document.getElementById("yellow_half_strip").style.bottom = -25 + "vw";
      console.log("no yellow_half_strip");
    };

    // purple blob
    if ( data_state.includes("purple_blob"))
    {
      document.getElementById("purple_blob").style.top = 0;
      console.log("purple_blob");
    } else {
      document.getElementById("purple_blob").style.top = -50 + "vh";
      console.log("no purple_blob");
    };

    // right_e
    if ( data_state.includes("right_e_top"))
    {
      document.getElementById("right_e").style.top = 10 + "vh";
      document.getElementById("right_e").style.right = 0;
      console.log("right_e_top");
    } else if ( data_state.includes("right_e_bottom")){
      document.getElementById("right_e").style.top = 60 + "vh";
      document.getElementById("right_e").style.right = 0;
      console.log("right_e_bottom");
    } else {
      document.getElementById("right_e").style.right = -4 + "vw";
      console.log("no right_e");
    };

    // clear the background so that the overlays don't interfere
    // with underlying iframe
    if ( data_state.includes("clear_background"))
    {
      document.getElementById("purple_overlay").style.transform = "translateY(100vh)";
      document.getElementById("white_overlay").style.transform = "translateY(100vh)";
      document.getElementById("black_overlay").style.transform = "translateY(100vh)";
      document.getElementById("blue_overlay").style.transform = "translateY(100vh)";
      document.getElementById("blue_pane_right").style.transform = "translateY(100vh)";
      document.getElementById("blue_pane_left").style.transform = "translateY(100vh)";
      document.getElementById("touch_pane").style.transform = "translateY(100vh)";
    };
  }
  else
  {
    console.log("nothing special")
  };
};

function removeDecorations() {
  console.log("removeDecorations")
  document.getElementById("purple_overlay").style.opacity = 0;
  document.getElementById("white_overlay").style.opacity = 0;
  document.getElementById("black_overlay").style.opacity = 0;
  document.getElementById("blue_overlay").style.opacity = 0;
  document.getElementById("blue_pane_right").style.opacity = 0;
  document.getElementById("blue_pane_left").style.opacity = 0;
  document.getElementById("touch_pane").style.opacity = 0;
  document.getElementById("logo_color").style.left = -12 + "vw";
  document.getElementById("logo_part_white").style.left = -12 + "vw";
  document.getElementById("logo_white").style.left = -12 + "vw";
  document.getElementById("yellow_strip").style.left = -10 + "vw";
  document.getElementById("yellow_flag").style.left = -10 + "vh";
  document.getElementById("purple_half_circle_top").style.top = -17 + "vw";
  document.getElementById("purple_half_circle_bottom").style.bottom = -10 + "vw";
  document.getElementById("purple_strip_bottom").style.bottom = -10 + "vw";
  document.getElementById("yellow_half_strip").style.bottom = -25 + "vw";
  document.getElementById("purple_blob").style.top = -50 + "vh";
  document.getElementById("right_e").style.right = -4 + "vw";
  document.getElementById("blue_strip").style.right = "-" + document.getElementById("blue_strip").offsetWidth + "px";
};

}

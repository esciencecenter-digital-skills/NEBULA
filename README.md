# NEBULA

The NEBULA (Nuxt & eScience Based Universal Learning Application) framework can be used to create an easily maintainable, version-controllable, web-based lesson collection. It uses [Nuxt.js](https://nuxtjs.org/) and [Vue.js](https://vuejs.org/).

NEBULA is being created as part of the Netherlands eScience Center Digital Skills programme.


# Creating content with NEBULA

## Directory structure and content tags

To create a platform with NEBULA the first thing that is needed is a content repository. This can be copied from the [Research Software Support example](https://github.com/esciencecenter-digital-skills/research-software-support). The repository has a few default files:

- README.md: The documentation of your platform
- LICENSE: The license under which the content is published, by default cc-BY
- CONTRIBUTING.md: Explanation on how others can contribute to the content
- config.json: The configuration file which defines its name/title, styling, organization and categories.

The `.github` directory holds the workflow files that are necessary to serve the platform on github pages, as well as additional tests and checks. All content lives in the `modules` directory. 

Most modules are already set up: they contain a `{modulename}.md` file, as well as a `_modulename/` directory.
If your module is not yet set up, please create both these inside the `modules` directory.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


### The `_modulename/` directory

Any files that are relevant for the module should be placed in the `_modulename/` directory.
This includes images that are linked in the `modulename.md` file, as well as slides, and images used in the slides.

When embedding images in the `modulename.md` file or slides, please use the following path: `stories/_modulename/image.png`.
While technically possible, because we want the modules to be transportable, please avoid using images from other modules.

### The `modulename.md` file

#### YAML header

The module starts with a YAML header.
For instance, the header for the SMP module looks like this:

```yaml
---
id: 1
trl: medium
category: Reusability
title: Software Management Plans
author: eScience Center
thumbnail: "nlesc-dummy.png"
---
```

The only important fields at this point are `category`, `title`, and `thumbnail`.

The `category` field should be one of the categories mentioned on the [main page](https://esciencecenter-digital-skills.github.io/research-software-support/).
Any changes to the order of categories or their names should be set in the config.json file, in the root directory.
The `title` field should be the title of the module; it will be shown on the main overview page.
The `thumbnail` field should be the name of the thumbnail image, which should be placed in the `static/stories/_modulename/` directory.
This image shows up on the index page.
Eventually, we will use customized icons for this; currently, we use dummy images.
Check any of the existing modules for an example.

The `id`, `author` and `trl` (technical readiness level) properties are currently not used, but they are still here for legacy reasons.

Note that the path to the thumbnail image is relative to the `_modulename/` directory, as opposed to any images inside the text.

#### Chapters

A chapter (i.e. the content in a single tab) is fenced by triple colons, as follows:

```markdown
:::Chapter{headline="Why an SMP?" widemd=1}

A software management plan (SMP) can help you!
:::
```

The `headline` field is the title of the of the chapter tab.
Meanwhile, `widemd=1` indicates that the chapter type is text-based. For more information on the various chapter types, see [below](#chapter-types).

Between the colons, you can use markdown to format the text.

#### Chapter types

A chapter of a module will render as a tab in the horizontal navigation bar. Currently two types of 

### Slides with Reveal.js

Slides should be placed in the `/modules/{modulename}/` directory as a markdown file with the special extension `.pmd`, for example: `presentation.pmd`.

The slides are written in Markdown with some extra additions, and rendered using [Reveal.js](https://revealjs.com/). 

#### Slide types

At the moment only eScience themed slides are supported. There are currently four different slide types:

- Title slide, `data-state="title"`
- Default slide, `data-state="standard"`
- "About us", `data-state="about"`
- "Let's stay in touch", `data-state="keepintouch"`

A slide is fenced by three dashes, and (optionally) an HTML comment that indicates the slide type:

```markdown

<!-- .slide: data-state="standard" -->

This is a standard slide.

---

<!-- .slide: data-state="about" -->

My name is ...

---

```

Always keep an empty line before and after the slide fence.

The dashes indicate the slide borders; the are therefore only necessary between the slides, and not at the beginning or end of a presentation.

#### Slide content

Slide content can be written in Markdown.

To keep slides clean, use single images per slide.
Styling in Reveal is not trivial, and it is best to keep it simple.

Images can be embedded using either markdown syntax:

```markdown
![Mapping the Via Appia](stories/_smp/viaappia.png)
```

Or, for more customisation, using HTML:

```html
<center>
<img src="stories/_smp/researchcycle.png" width="60%">
</center>
```

#### Slide notes

Notes should be added at the bottom of the slide, as follows:

```markdown

Note:
Here is the text of a note.

---
```

where the `---` indicates the fence to the following slide.

#### Final slide

The final slide should provide the contact information for the eScience Center.
This is not hardcoded into the slides, so it should be provided explicitly.

The code for the final slide is as follows:

```markdown

---

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70

```
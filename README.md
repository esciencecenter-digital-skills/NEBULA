[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/esciencecenter-digital-skills/NEBULA/blob/main/LICENSE)

# NEBULA

Copyright 2023-2024 Netherlands eScience Center

The NEBULA (Nuxt & eScience Based Universal Learning Application) framework can be used to create an easily maintainable, version-controllable, web-based lesson collection. It uses [Nuxt.js](https://nuxtjs.org/) and [Vue.js](https://vuejs.org/).

NEBULA is being created as part of the Netherlands eScience Center Digital Skills programme.

For elaborate setup instructions and other documentation, see the [NEBULA documentation](https://github.com/esciencecenter-digital-skills/NEBULA-docs)


# Quick setup

## Content directory/repository

To use NEBULA you will need to setup a content directory or repository. See the [NEBULA content template repository](https://github.com/esciencecenter-digital-skills/NEBULA-content-template) or the [NEBULA documentation on creating content](https://github.com/esciencecenter-digital-skills/NEBULA-docs/blob/main/content-repo-instantiation.md) for more information.

## Install dependencies

Install the dependencies using the node package manager:

```bash
# npm
npm install
```

## Link to the content directory

```bash
export CONTENT_PATH="~/path/to/your/content/directory"
```

## Local development build

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

# Contributing

If you want to contribute to the NEBULA framework, please read the [contributing guidelines](https://github.com/esciencecenter-digital-skills/NEBULA/blob/main/CONTRIBUTING.md).
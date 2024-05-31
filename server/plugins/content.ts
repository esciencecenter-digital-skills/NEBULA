// This plugin is needed to solve the current bad implementation of NuxtContent
// that only makes the post-processed markdown available in body and drops
// other props (added e.g. during beforeParse) so the raw markdown cannot simply
// be passed as a custom property.
//
// Check e.g. https://github.com/nuxt/content/issues/2056 to see if this
// eventually gets fixed.

// The following code is the workaround proposed here:
// https://github.com/nuxt/content/issues/2056#issuecomment-1560200992
export default defineNitroPlugin((nitroApp) => {

  let files = {}

  nitroApp.hooks.hook("content:file:beforeParse", (file) => {
    if (file._id.endsWith(".md")) {
      files[file._id] = file.body;
    }
  })

  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    if (file._id.endsWith(".md")) {
      file.plainText = files[file._id];
    }
  })
});

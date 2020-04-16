const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kenyonj/code/personal/twentyeightmusic/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-musician-src-pages-404-js": hot(preferDefault(require("/Users/kenyonj/code/personal/twentyeightmusic/node_modules/gatsby-theme-musician/src/pages/404.js"))),
  "component---node-modules-gatsby-theme-musician-src-templates-landing-js": hot(preferDefault(require("/Users/kenyonj/code/personal/twentyeightmusic/node_modules/gatsby-theme-musician/src/templates/landing.js")))
}


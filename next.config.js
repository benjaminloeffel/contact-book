const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")();
const withOffline = require("next-offline");

module.exports = withPlugins(
  [
    [
      withOffline,
      {
        /* plugin config here ... */
      }
    ],
    [withMDX, { pageExtensions: ["js", "mdx"] }]
  ],
  {
    /* global config here ... */
  }
);

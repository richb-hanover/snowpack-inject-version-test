// inject-version.js - this file must be in the top-level directory of the repo
// Replace all occurrences of %%INJECTED_VERSION%%  in ".html" files
// with the package.json's version string
var packagejson = require("./package.json");
module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: "inject-version",
    async transform({ id, contents, isDev, fileExt }) {
      if (fileExt === ".html") {
        return contents.replace(/%%INJECTED_VERSION%%/g, packagejson.version);
      }
    },
  };
};

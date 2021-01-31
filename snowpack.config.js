/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    ["@snowpack/plugin-typescript"],
    ["@snowpack/plugin-webpack"],
    ["./inject-version.js"],
  ],
  // install: [
  //   /* ... */
  // ],
  installpackageOptions: {
    installTypes: true,
  },
  packageOptions: {
    source: "remote",
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  // proxy: {
  //   /* ... */
  // },
  alias: {
    /* ... */
  },
};

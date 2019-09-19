// babel.config.js

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", {loose: true}],
    "@babel/plugin-transform-runtime",
    "add-module-exports"
  ],
};

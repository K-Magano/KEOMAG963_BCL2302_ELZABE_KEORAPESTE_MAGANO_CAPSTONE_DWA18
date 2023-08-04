const DefinePlugin = require("webpack").DefinePlugin;

module.exports = {
  plugins: [
    new DefinePlugin({
      process: {
        env: {},
      },
    }),
  ],
};

module.exports = DefinePlugin;

const DefinePlugin = require("./DefinePlugin");

module.exports = {
  plugins: [
    new DefinePlugin({
      process: {
        env: {},
      },
    }),
  ],
};

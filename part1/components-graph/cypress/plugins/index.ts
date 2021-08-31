const injectDevServer = require("@cypress/react/plugins/react-scripts");

module.exports = (on: any, config: any): any => {
  injectDevServer(on, config);

  return config;
};

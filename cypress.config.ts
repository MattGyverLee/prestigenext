import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,

  env: {
    electronPath: "./node_modules/.bin/electron",
    // skipServe: "true",
    timeout: 100000,
  },

  viewportWidth: 800,
  viewportHeight: 600,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

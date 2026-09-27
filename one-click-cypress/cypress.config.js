const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'http://localhost:3000',
    baseUrl: process.env.BASE_URL,
    viewportHeight: 1080,
    viewportWidth: 1920,
    screenshotOnRunFailure: false,
    video: true,
  },
});

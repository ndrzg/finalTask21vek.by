const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    
    // setupNodeEvents(on, config) {
    //   require('cypress-mochawesome-reporter/plugin')(on)
    // },
    autoRun: false,
    watchForFileChanges: false,
    defaultCommandTimeout:7000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    log: {
      level: 'error'
    },
    specPattern: "cypress/integration/*.spec.{js,jsx,ts,tsx}"
    
  },
});



 
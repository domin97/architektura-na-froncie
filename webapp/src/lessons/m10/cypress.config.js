const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3010',
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 0,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 0,
    },
    // Cypress 10.x wprowadził nowe zmiany w nazwach folderów (e2e/ zamiast integration/).
    // Dla kompatybilności pozostajemy przy starych ścieżkach, skoro Cypress daje taką możliwość.
    specPattern: 'cypress/integration/**/*{.spec,-test}.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.{js,jsx,ts,tsx}',
  },
})

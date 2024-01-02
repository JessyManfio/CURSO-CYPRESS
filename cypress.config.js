const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
<<<<<<< HEAD
      { "reporter"; "mochawesome", 
        "reporterOptions"; 
          { "reportDir"; "cypress/report/mochawesome-report", 
           "overwrite"; true, 
           "html"; true, 
           "json"; false, 
           "timestamp"; "mmddyyyy_HHMMss" }}
=======
      // implement node event listeners here
>>>>>>> c5089fe17af5d6e59394665f87f638e826d85b16
    },
  },
});

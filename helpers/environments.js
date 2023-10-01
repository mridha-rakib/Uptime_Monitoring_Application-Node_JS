/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Rakib
 * Date: 2023
 *
 */

////===dependencies===============================

//---scaffolding---
// module scaffolding
const environments = {};

// staging environment
environments.staging = {
  port: 3000,
  envName: "staging",
  secretKey: "hsjdhsdhsjdhjshdjshd",
};

// production environment
environments.production = {
  port: 5000,
  envName: "production",
  secretKey: "djkdjskdjksdjksjdskjd",
};

// determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

// export module
module.exports = environmentToExport;

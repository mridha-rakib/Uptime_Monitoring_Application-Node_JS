/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Rakib
 * Date: 2023
 *
 */

////===dependencies===============================

//---scaffolding---
const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

//--export-----
module.exports = environmentToExport;

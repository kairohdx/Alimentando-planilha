const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.development.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment${isProduction ? "prd" : "dvp"} = {
   production: ${isProduction},
   baseUrl: "${isProduction ? process.env["baseUrl"] : "http://localhost:3000/"}",
   publicUser: "${process.env["publicUser"]}",
   publicPass: "${process.env["publicPass"]}",
   SHEET_ID: "${process.env["SHEET_ID"]}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err:any) {
   if (err) {
      console.log(err);
   }

   console.log(`Wrote variables to ${targetPath}`);
})
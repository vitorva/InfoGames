import { getEnvFile } from "./getEnvFile";
const fs = require("fs");

export function setAccessToken(response, filename) {
  const content = getEnvFile();

  content.access_token = response.data.access_token;
  fs.writeFileSync(filename, JSON.stringify(content));
}

import { getEnvFile } from "./getEnvFile";

export function getCredentials() {
  const content = getEnvFile();

  return [
    content.client_id,
    content.client_secret,
    content.grant_type,
    content.access_token,
  ];
}

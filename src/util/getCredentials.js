import { getContentFile } from "./getContentFile";

export function getCredentials(filename) {
  const content = getContentFile(filename);

  return [
    content.client_id,
    content.client_secret,
    content.grant_type,
    content.access_token,
  ];
}

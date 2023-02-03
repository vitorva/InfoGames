import { getCredentials } from "./getCredentials";

test("get credentials from env file", () => {
  expect(getCredentials(".env-test")).not.toBeNull();

  const [client_id, client_secret, grant_type, access_token] =
    getCredentials(".env-test");

  expect(client_id).not.toBeNull();

  expect(client_secret).not.toBeNull();

  expect(grant_type).not.toBeNull();

  expect(access_token).not.toBeNull();
});

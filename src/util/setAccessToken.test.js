import { getCredentials } from "./getCredentials";
import { setAccessToken } from "./setAccessToken";

test("replace access_token", () => {
  const old_access_token = getCredentials(".env-test")[3];
  const new_access_token = String(parseInt(old_access_token) + 1);

  setAccessToken(new_access_token, ".env-test");

  expect(old_access_token).not.toEqual(new_access_token);
});

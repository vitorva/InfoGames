import { getCredentials } from "./getCredentials";
import { setAccessToken } from "./setAccessToken";

test("replace access_token", () => {
  const old_access_token = getCredentials()[3];

  // TODO : filename comme paramètre de fonction

  //setAccessToken("12345", ".env-test");

  const new_access_token = getCredentials()[3];

  //expect(old_access_token).not.toEqual(new_access_token);
});

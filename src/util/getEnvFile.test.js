import { getEnvFile } from "./getEnvFile";

test("get env file", () => {
  expect(getEnvFile()).not.toBeNull();
});

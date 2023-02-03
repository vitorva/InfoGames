import { getContentFile } from "./getContentFile";

test("get content file", () => {
  expect(getContentFile(".env-test")).not.toBeNull();
});

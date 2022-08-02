import { expect, test } from "vitest";
import { add } from "./add";

test("init", () => {
  expect(1 + 1).toBe(2);
});

test("support test import file", () => {
  expect(add(1, 1)).toBe(2);
});

import { test } from "vitest";
import Hello from "../src/components/Hello";
import {mount} from '@vue/test-utils'

test("hello", () => {
  console.log(Hello);
  mount(Hello)
});

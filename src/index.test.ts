import { HttpRequest } from "./index.js"

test("`HttpRequest` can be created", () => {
  const request = new HttpRequest("POST", "/cats", { "Content-Type": "application/json" }, { name: "Scratchy", food: "chicken" });
  expect(request).toBeDefined();
  expect(request.method).toBe("POST")
  expect(request.path).toBe("/cats")
  expect(request.headers).toStrictEqual({ "Content-Type": "application/json" })
  expect(request.body).toStrictEqual({ name: "Scratchy", food: "chicken" })
})

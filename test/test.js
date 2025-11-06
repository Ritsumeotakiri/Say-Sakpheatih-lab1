const request = require("supertest");
const app = require("../app");
const { expect } = require("chai");

describe("GET /", function () {
  it("should return Hello, CI/CD!", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello, CI/CD!", done);
  });
});

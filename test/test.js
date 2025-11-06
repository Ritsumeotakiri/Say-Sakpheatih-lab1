const request = require("supertest");
const app = require("../app");

describe("GET /", function () {
  it("should return Hello, CI/CD with Pull Requests!", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .expect("Hello, CI/CD with Pull Requests!", done);
  });
});
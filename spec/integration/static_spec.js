const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const second = "http://localhost:3000/marco";

describe("routes : static", () => {

  describe("GET /", () => {

    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Bloccit");

        done();
      });
    });

  });

  describe("GET /marco", () => {

    it("should return status code 200", (done) => {

      request.get(second, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toBe("polo");

        done();
      });
    });

  });

  describe("GET /about", () => {

    it("should return status code 200 and return the string 'About Us' in the body of the response", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("About Us");

        done();
      });
    });

  });
});
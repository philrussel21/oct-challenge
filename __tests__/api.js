const { expect } = require("@jest/globals");
const request = require("supertest")
const app = require("../app")


describe('Integrate Jest', () => {
  test('should return true', () => {
    expect(true).toBeTruthy()
  });
});

describe('Integrate Supertest', () => {
  test('should return home page string', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect("Hello World!")
  });
});
const { expect } = require("@jest/globals");
const request = require("supertest")
const app = require("../app")


describe('Integrate Jest', () => {
  test('should return true', () => {
    expect(true).toBeTruthy()
  });
});

describe('Integrate Supertest', () => {
  test('should return home page string', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe("Hello World!")
  });
});
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
    expect(res.text).toBe("Hello Octopus!")
  });
});

describe('Hello Route', () => {
  test('should return okay but with no content', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(204)
  });
});

describe('Sum Route', () => {
  test('should return 400 - Bad Request for invalid queries', async () => {
    const nums = [1, 2, 'a']
    const res = await request(app).get(`/sum?numbers=${nums[0]},${nums[1]},${nums[2]}`)
    expect(res.statusCode).toBe(400)
  });


  test('should return okay and the sum of supplied numbers', async () => {
    const nums = [1, 3, 4]
    const sum = nums.reduce((accum, currVal) => accum + currVal)
    const res = await request(app).get(`/sum?numbers=${nums[0]},${nums[1]},${nums[2]}`)
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe(sum.toString())
  });
});

describe('Reverse Words Route', () => {
  test('should return okay and the reversed word of the supplied strings', async () => {
    const string = "Hi, Octopus"
    const reversed = "iH, supotcO"
    const res = await request(app).get(`/reverse-words?sentence=${string}`)
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe(reversed)
  });
});

describe('Invalid Routes', () => {
  test('should return status 404', async () => {
    const res = await request(app).get('/someRandomRoute');
    expect(res.statusCode).toBe(404)
  });
});
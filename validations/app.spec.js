const app = require("../app");
const supertest = require("supertest");

test("스웨거 연결했을 때 잘 작동해야 한다.", async () => {
  const res = await supertest(app).get("/api");
  expect(res.status).toEqual(301);
});

test("/test.html 경로에 요청했을 때 status code가 404여야 한다.", async () => {
  const res = await supertest(app).get("/test.html");
  expect(res.status).toEqual(404);
});

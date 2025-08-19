import { app, server } from "../src/server";
import type { Response as SupertestResponse } from "supertest";
import request from "supertest";

describe("GET /", () => {
  afterAll(() => {
    server.close();
  });

  // This is an individual test case
  it("should return Hello, TypeScript with Express!", async () => {
    const res: SupertestResponse = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ body: "Hello, TypeScript with Express!" });
  });
});

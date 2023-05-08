import request from "supertest";
import { app } from "../../app";

it("return a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "user@domain.com",
      password: "1234",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "sadfasdfsdf",
      password: "1234",
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "user@domain.com",
      password: "1",
    })
    .expect(400);
});

it("returns a 400 with an missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "user@domain.com" })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({ password: "1234" })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "user@domain.com", password: "1234" })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({ email: "user@domain.com", password: "1234" })
    .expect(400);
});

it("Sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "user@domain.com",
      password: "1234",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});

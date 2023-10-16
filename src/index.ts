import {Elysia} from "elysia";

const app = new Elysia()
  .get("/", () => "Building rest api")
  .get("/post/:id", ({params: {id}}) => {
    return {id};
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";
import { handleAsyncErrors } from "./modules/middleware";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  throw new Error("Error");
  // console.log("Hello from express");
  // res.status(200);
  // res.json({ message: "hello" });
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

app.use(handleAsyncErrors);
router.use(handleAsyncErrors);

export default app;

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import bcrypt from "bcrypt";
import fakedb from "./fakedb.js";
import {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} from "./tokens.js";

const { compare, hash } = bcrypt;

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "localhost:3000",
    credentials: true,
  })
);

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) throw new Error("an email is required");

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      throw new Error("Invalid email format");
    }

    if (!password) {
      throw new Error("a Password is required");
    }

    if (password.length <= 7) {
      throw new Error("Minimum password length of 8");
    }
    const user = fakedb.find((user) => user.email === email);

    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const userObj = {
      id: fakedb.length + 1,
      email,
      password: hashedPassword,
    };

    fakedb.push(userObj);
    res.status(201).send({ message: "user was created successfully" });
    console.log(fakedb);
  } catch (error) {
    res.status(400).send({ error: `${error.message}` });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = fakedb.find((user) => user.email === email);
    if (!user) {
      throw new Error("This account dosent exist please sign up");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("Incorrect password");
    }

    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    user.refreshToken = refreshToken;
    console.log(fakedb);
    sendRefreshToken(res, refreshToken);
    sendAccessToken(req, res, accessToken);
  } catch (error) {
    res.send({ error: `${error.message}` });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("refreshtoken", { path: "/refresh_token" });
  res.send({ message: "successfully logged out" });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

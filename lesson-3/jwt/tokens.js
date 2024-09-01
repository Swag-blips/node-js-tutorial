import jwt from "jsonwebtoken";

const { sign } = jwt;

export const createAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (userId) => {
  return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

export const sendAccessToken = (req, res, accessToken) => {
  res.send({
    email: req.body.email,
    accessToken,
  });
};

export const sendRefreshToken = (res, refreshToken) => {
  res.cookie("refreshtoken", refreshToken, {
    httpOnly: true,
    path: "/refresh_token",
  });
};

import express from "express";
const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (req, res, next) => {
  return res.send("i still love you");
};

const handleLogin = (req, res) => {
  return res.send({ message: "login" });
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Hyeonju server listening on port http://localhost:${PORT} 💖`);

app.listen(PORT, handleListening);

import express from "express";
const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(` ${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    console.log("Not Allowed");
    return res.send("<h1> Not Allowed </h1>");
  }
  console.log("Allowed");
  next();
};

const handleHome = (req, res, next) => {
  return res.send("i still love you");
};

const handleProtected = (req, res) => {
  return res.send({ message: "Welcom to the private lounge." });
};

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Hyeonju server listening on port http://localhost:${PORT} 💖`);

app.listen(PORT, handleListening);

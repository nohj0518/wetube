import express from "express";
import morgan from "morgan";
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    console.log("Not Allowed");
    return res.send("<h1> Not Allowed </h1>");
  }
  console.log("Allowed");
  next();
};

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("EditUser");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

app.use(privateMiddleware);

const handleListening = () =>
  console.log(`Hyeonju server listening on port http://localhost:${PORT} 💖`);

app.listen(PORT, handleListening);

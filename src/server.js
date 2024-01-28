import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Hyeonju server listening on port http://localhost:${PORT} 💖`);

app.listen(PORT, handleListening);

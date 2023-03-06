import express from "express";
const app = express();
const PORT = process.env.PORT || 3005;
const MoviesPort = 3001;
import connect from "../api/src/db";
import server from "./src/app";

app.listen(PORT, () => {
  server.listen(MoviesPort, () => {
    console.log(`Server is running on port ${MoviesPort}`); // eslint-disable-line no-console
  });
  connect();
});

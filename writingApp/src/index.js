import express from "express";
import path from "path";

import userRouter from './routers/user';
require("./db/db");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter)

app.use(express.static(path.join(__dirname, "../../writingAppFrontend/dist")));

app.get("/*", function(req, res) {
  console.log("recieved get")
  res.sendFile(
    path.join(__dirname, "../../writingAppFrontend/dist/index.html"),
    function(err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

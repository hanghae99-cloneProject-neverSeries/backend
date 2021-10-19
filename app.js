const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const { sequelize } = require("./models");
const testRouter = require("./routes/test");
const novelRouter = require("./routes/novel");
const indexRouter = require("./routes/");

const app = express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("MYSQL 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/", indexRouter);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/test", testRouter);
app.use("/novel", novelRouter);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/api`);
});

const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const { sequelize } = require("./models");
const { swaggerUi, specs } = require("./swagger/swagger");
const loginAuth = require('./routes/auth')
const errorHandler = require("./middlewares/error-middleware");
const novelRouter = require("./routes/novel");
const indexRouter = require("./routes/");
const reviewsRouter = require("./routes/reviews");

const cors = require('cors');
const app = express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("MYSQL 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(cors({
  // 쿠키 등록 수정부분
  credentials: true,
  origin: true,
}));

app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/", loginAuth);
app.use("/novel", novelRouter);
app.use("/reviews", reviewsRouter);


// 에러 핸들러 미들웨어 --> 김정호: app.js 추가된 부분
app.use(errorHandler.routerError);
app.use(errorHandler.errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/api`);
});
const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const { sequelize } = require('./models');
const {swaggerUi, specs} = require('./swagger/swagger');
const testRouter = require("./routes/test");

const signupPage = require('./routes/signup');
const loginPage = require('./routes/login');
const errorHandler = require('./middlewares/error-middleware')


const novelRouter = require("./routes/novel");


const app = express();

sequelize.sync({ force: false })
  .then(() => {
    console.log('MYSQL 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/test', testRouter);

app.use('/signup', signupPage);
app.use('/login', loginPage);

// 에러 핸들러 미들웨어 --> 김정호: app.js 추가된 부분
app.use(errorHandler.routerError);
app.use(errorHandler.errorHandler);

app.use('/novel', novelRouter);


app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/api`);
})
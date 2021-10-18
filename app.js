const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const { sequelize } = require('./models');
const testRouter = require("./routes/test");

const app = express();

sequelize.sync({ force: true })
  .then(() => {
    console.log('MYSQL 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/test', testRouter);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/api`);
})
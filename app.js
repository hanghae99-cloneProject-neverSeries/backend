const express = require('express');
const app = express();
require('dotenv').config();

const {sequelize} = require('./models');

sequelize.sync({force: true})
  .then(() => {
    console.log('MYSQL 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(process.env.PORT, ()=>{
  console.log(`http://localhost:${process.env.PORT}/api`);
})
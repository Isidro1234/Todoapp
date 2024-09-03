const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
const Port = process.env.Port

app.listen(Port, ()=>{
  console.log(`this is running on port ${Port}`)
})
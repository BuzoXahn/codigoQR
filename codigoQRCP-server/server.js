const express = require("express");
const cors = require("cors");
const pool = require("./database");
const { response } = require("express");


const app = express();

app.use(express.json());
app.use(cors());

//const pool = new Pool({
  //  user: "postgres",
   
  
  //password:"chan",
    //host:"localhost",
    //port:"5432",
    //database:"central_perruna"
//});

app.post('/RegisterFroms', (req, res) => {
const userRegister = 'INSERT INTO accounts (user_id serial PRIMARY KEY, username VARCHAR (50) UNIQUE NOT null, password VARCHAR (50) UNIQUE NOT NULL);'
pool
    .query(userRegister)
    .then((Response) => {
        console.log("Register User");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = pool;
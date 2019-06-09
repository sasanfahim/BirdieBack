import * as express from "express";

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    port: 3306,
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    database: "birdietest"
});

var result: any[] = [];

con.connect(function (err: any) {
    if (err) throw err;
    con.query("select * from events", function (err:any, data:any) {
        if (err) throw err;
        result = data;
    });
});

export const pingController = express.Router();

pingController.get('/hello', (_, res) => {
    res.status(200).json(
        result
    );
});




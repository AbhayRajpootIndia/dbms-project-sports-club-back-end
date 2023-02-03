const model = require("../models/friends.model");

const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sports_club'   
});

db.connect((error) => {
    if (error) {
        throw error;
    }

    console.log('connected to mysql');
})

function getCoaches(req, res) {
    let sql =  'SELECT * FROM coaches';

    db.query(sql, (error, result) => {
        if (error) throw error;
        res.json(result);
        
    })
}

function getCoachesBySport(req, res) {

    let sport = req.params.sport;

    let sql =  `SELECT * FROM coaches WHERE sport='${sport}'`;

    db.query(sql, (error, result) => {
        if (error) throw error;
        res.json(result);
        
    })
}

function getSports(req, res) {
    let sql =  'SELECT DISTINCT sport FROM coaches';

    db.query(sql, (error, result) => {
        if (error) throw error;
        res.json(result);
        
    })
}


module.exports = {
    getCoaches,
    getCoachesBySport,
    getSports
}
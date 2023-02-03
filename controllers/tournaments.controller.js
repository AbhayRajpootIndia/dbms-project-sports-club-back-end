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

function getTournaments(req, res) {
    let sql = 'SELECT * FROM tournaments'

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function getTournamentsBySport(req, res) {

    let sport = req.params.sport

    let sql = `SELECT * FROM tournaments where sport_type='${sport}'`

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

module.exports = {
    getTournaments,
    getTournamentsBySport
}
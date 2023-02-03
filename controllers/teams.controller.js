
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

function getTeams(req, res) {
    let sql = 'SELECT * FROM teams'

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function getTeamsBySport(req, res) {

    let sport = req.params.sport

    let sql = `SELECT * FROM teams where sport_type='${sport}'`

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

module.exports = {
    getTeams,
    getTeamsBySport
}
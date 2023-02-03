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

function getPlayers(req, res) {
    let sql = 'SELECT * FROM players'

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function getPlayersBySport(req, res) {

    let sport = req.params.sport
    let team_id = req.params.team_id

    let sql = `SELECT * FROM players`

    if (sport) {
        sql = `SELECT * FROM players where sport='${sport}'`
    }

    if (team_id && sport) {
        sql = `SELECT * FROM players where sport='${sport}' AND team_id='${team_id}'`
    }

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function addPlayer(req, res) {

    let Player_id = req.body.Player_id;
    let P_name = req.body.P_name;
    let sport = req.body.sport;
    let address = req.body.address;
    let phone = req.body.phone;
    let Team_id = req.body.Team_id;
    let Coach_id = req.body.Coach_id;

    let sql = `INSERT INTO players VALUES (${Player_id}, '${P_name}', '${sport}', '${address}', '${phone}', ${Team_id}, ${Coach_id})`

    if (!Player_id || !P_name || !sport || !address || !phone || !Team_id || !Coach_id) {
        return;
    }

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function getPlayersMaxId(req, res) {

    let sql = `SELECT MAX(player_id) FROM players`
    console.log('max')

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

module.exports = {
    getPlayers,
    getPlayersBySport,
    addPlayer,
    getPlayersMaxId,
}
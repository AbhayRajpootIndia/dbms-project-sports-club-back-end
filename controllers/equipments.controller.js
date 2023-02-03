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

function getEquipments(req, res) {
    let sql = 'SELECT * FROM equipments'

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function getEquipmentsByPlayerId(req, res) {

    let player_id = req.params.player_id

    let sql = `SELECT * FROM equipments where Player_id='${player_id}'`

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

module.exports = {
    getEquipments,
    getEquipmentsByPlayerId
}
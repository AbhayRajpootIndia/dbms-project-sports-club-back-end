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

function addBorrow(req, res) {

    let E_id = req.body.E_id;

    let Player_id = req.body.Player_id;
    let date_out = req.body.date_out;
    let due_date = req.body.due_date;

    let sql = `UPDATE equipments SET Player_id=${Player_id}, date_out='${date_out}', due_date='${due_date}' where E_id=${E_id}`

    if (!Player_id || !date_out || !due_date || !E_id) {
        return;
    }

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function removeBorrow(req, res) {

    let E_id = req.body.E_id;

    
    let sql = `UPDATE equipments SET Player_id=NULL, date_out=NULL, due_date=NULL where E_id=${E_id}`

    if (!E_id) {
        return;
    }

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}


module.exports = {
    getEquipments,
    getEquipmentsByPlayerId,
    addBorrow,
    removeBorrow
}
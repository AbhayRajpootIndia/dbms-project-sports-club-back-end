
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

function getCourts(req, res) {
    let sql = 'SELECT * FROM court_view'

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

function getCourtsBySport(req, res) {

    let sport = req.params.sport

    let sql = `SELECT * FROM court where court_type='${sport}'`

    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.json(result);
    })
}

module.exports = {
    getCourts,
    getCourtsBySport
}
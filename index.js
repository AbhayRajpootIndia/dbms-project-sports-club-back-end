const express = require('express');

const app = express();

// connection headers
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

// auto parses incoming JSON objects (only if they are JSON otherwise no)
app.use(express.json());    

const coachesController = require('./controllers/coaches.controller');
const playersController = require('./controllers/players.controller');
const courtsController = require('./controllers/courts.controller');
const teamsController = require('./controllers/teams.controller');
const tournamentsController = require('./controllers/tournaments.controller')
const equipmentsController = require('./controllers/equipments.controller')

// POST requests
app.post('/addPlayer', playersController.addPlayer);

// GET requests

app.get('/sports', coachesController.getSports);

app.get('/coaches', coachesController.getCoaches);
app.get('/coaches/:sport', coachesController.getCoachesBySport);

app.get('/players/max-id', playersController.getPlayersMaxId);

app.get('/players', playersController.getPlayers);
app.get('/players/:sport', playersController.getPlayersBySport);
app.get('/players/:sport/:team_id', playersController.getPlayersBySport);

app.get('/courts', courtsController.getCourts);
app.get('/courts/:sport', courtsController.getCourtsBySport);

app.get('/teams', teamsController.getTeams);
app.get('/teams/:sport', teamsController.getTeamsBySport);

app.get('/tournaments', tournamentsController.getTournaments);
app.get('/tournaments/:sport', tournamentsController.getTournamentsBySport);

app.get('/equipments', equipmentsController.getEquipments);
app.get('/equipments/:player_id', equipmentsController.getEquipmentsByPlayerId);

// SERVER

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
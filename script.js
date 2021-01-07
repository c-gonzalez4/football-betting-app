'use strict';

//creating a new object
const scorers = {
	Gnarby: 1,
	Hummels: 1,
	Lewandowski: 2
};

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski'
		],
		[ 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze' ]
	],
	score: '4:0',
	scored: [ 'Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels' ],
	date: 'Nov 9th, 2037',
	scorers,
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5
	}
};

console.log(game);
//creating a player array for each team
const [ players1, players2 ] = game.players;
console.log(players1, players2);
//first player is goalkeeper the rest are field players
const [ gk, ...fieldplayers ] = players1;
console.log(gk);
console.log(...fieldplayers);

//all the players from both teams
const allPlayers = [ ...players1, ...players2 ];

console.log(allPlayers);

//team 1 original players plus 3 substitutes
const players1final = [ ...players1, 'Thiago', 'Coutinho', 'Perisic' ];
console.log(players1final);
//changing the names of the objects in game.odds
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);

//Function that recieves aribitary number of player names
//and also returns the score = the number of player names passed
const printGoals = function(...names) {
	const goalsScored = names.length;

	console.log(names);
	console.log(goalsScored);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//team with lower odd = winner
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//Coding Challenge #2
for (const player of game.scored.entries()) console.log(`Goal ${player[0] + 1}: ${player[1]} `);

//calculating the average of the odds using for of loop
let average = 0;
const values = Object.values(game.odds);
console.log(values);

for (const x of values) {
	average += x;

	console.log(x);
}
console.log(average / values.length);

//printing out the odds in a formatted way
for (const [ team, odd ] of Object.entries(game.odds)) {
	const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;
	//console.log(team, odd);
	console.log(`Odd of ${teamStr} ${odd}`);
}

//Coding challenge #3

const gameEvents = new Map([
	[ 17, '⚽ GOAL' ],
	[ 36, '� Substitution' ],
	[ 47, '⚽ GOAL' ],
	[ 61, '� Substitution' ],
	[ 64, '� Yellow card' ],
	[ 69, '� Red card' ],
	[ 70, '� Substitution' ],
	[ 72, '� Substitution' ],
	[ 76, '⚽ GOAL' ],
	[ 80, '⚽ GOAL' ],
	[ 92, '� Yellow card' ]
]);

//create array of the different evants that happened(no duplicates)
const events = [ ...new Set(gameEvents.values()) ];
console.log(events);

//delete yellow card from minute 64
gameEvents.delete(64);
console.log(gameEvents);

//calculate the average between every event
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);
console.log();
//console.log(gameEvents.keys());
for (const [ key, value ] of gameEvents) {
	//console.log(key, value);
	if (key <= 45) {
		console.log(`[FIRST HALF] ${key}: ${value}`);
	} else {
		console.log(`[SECOND HALF] ${key}: ${value}`);
	}
}

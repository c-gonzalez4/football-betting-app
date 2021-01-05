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
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5
	}
};

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

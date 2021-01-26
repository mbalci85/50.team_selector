// As a NBA fan, you love playing games on internet with your own team.

// In this project, you’ll use JavaScript to randomly create a team based on given players. We’ll keep running it until we’re satisfied with the created team!

const team = {
	_positions: {
		centers: [],
		forwards: [],
		guards: [],
	},

	get centers() {
		return this._positions.centers;
	},
	get forwards() {
		return this._positions.forwards;
	},
	get guards() {
		return this._positions.guards;
	},
	get positions() {
		return { centers: [], forwards: [], guards: [] };
	},
	addPlayerToPosition(positionName, playerName, playerPoint) {
		const player = { name: playerName, point: playerPoint };
		this._positions[positionName].push(player);
	},
	getRandomPlayerFromPosition(positionName) {
		const players = this._positions[positionName];
		let randomIndex = Math.floor(Math.random() * players.length);
		return players[randomIndex];
	},
	generateRandomTeam() {
		let center = this.getRandomPlayerFromPosition('centers');
		let forward = this.getRandomPlayerFromPosition('forwards');
		let guard = this.getRandomPlayerFromPosition('guards');

		return {
			center: center.name,
			forward: forward.name,
			guard: guard.name,
			averagePoint: (
				(center.point + forward.point + guard.point) /
				3
			).toFixed(2),
		};
	},
};

team.addPlayerToPosition('centers', 'John', 7);
team.addPlayerToPosition('centers', 'Mark', 6);
team.addPlayerToPosition('centers', 'Mike', 8);
team.addPlayerToPosition('centers', 'Tom', 9);
team.addPlayerToPosition('centers', 'Tim', 6);

team.addPlayerToPosition('forwards', 'Hasan', 8);
team.addPlayerToPosition('forwards', 'Hakan', 7);
team.addPlayerToPosition('forwards', 'Halit', 8);
team.addPlayerToPosition('forwards', 'Halil', 9);
team.addPlayerToPosition('forwards', 'Hakki', 7);

team.addPlayerToPosition('guards', 'Mustafa', 6);
team.addPlayerToPosition('guards', 'Ahmet', 9);
team.addPlayerToPosition('guards', 'Ali', 8);
team.addPlayerToPosition('guards', 'Tuncay', 6);
team.addPlayerToPosition('guards', 'Oguzhan', 8);

let selectedTeam = team.generateRandomTeam();
console.log(selectedTeam);

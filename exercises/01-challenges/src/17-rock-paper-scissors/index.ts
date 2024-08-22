/**
 * Abigail and Benson are playing Rock, Paper, Scissors.
 * Each game is represented by an array of length 2, 
 * where the first element represents what Abigail played and the second element represents what Benson played.
 * Given a sequence of games, determine who wins the most number of matches and output the winners name. If they tie, output "Tie!".
 * R stands for Rock
 * P stands for Paper
 * S stands for Scissors
 */

function rockPaperScissors(games: string[][]) {
    let abigailWins = 0;
    let bensonWins = 0;
    for (let i = 0; i < games.length; i++) {
        let abigailPick = games[i][0];
        let bensonPick = games[i][1];
        if ((abigailPick === 'R' && bensonPick === 'S') || (abigailPick === 'S' && bensonPick === 'P') || (abigailPick === 'P' && bensonPick === 'R')) {
            abigailWins++;
        } else if (abigailPick !== bensonPick) {
            bensonWins++;
        }
    }
    if (abigailWins > bensonWins) {
        return 'Abigail';
    } else if (abigailWins === bensonWins) {
        return 'Tie!';
    } else {
        return 'Benson';
    }
}



export { rockPaperScissors };
function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * 3);
    var computerChoice = choices[randomIndex];

    var result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerHTML = `사용자: ${userChoice}, 컴퓨터: ${computerChoice}, 결과: ${result}`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return '무승부!';
    }

    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return '사용자 승리!';
    } else {
        return '컴퓨터 승리!';
    }
}

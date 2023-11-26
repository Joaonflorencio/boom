
let gameNumber;
let userNumber;
let countdown = 5;
let countdownInterval;
    
document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        const Game = new Promise((resolve) => {
            countdownInterval = setInterval(() => {
                document.getElementById('countdown').innerHTML = `Countdown: ${countdown} seconds`;
                countdown--;
                if(countdown < 0) {
                    clearInterval(countdownInterval)
                    resolve();
                }
            }, 1000);
        });

        userNumber = parseInt(document.getElementById('userInput').value, 10);

        function displayResult () {
            if(userNumber === gameNumber) {
                document.getElementById('result').innerHTML = `
                    <div id='result-green'>Has salvado el mundo!</div> 
                    <div class ='message'>Has elegido el número ${userNumber} y el número correcto era ${gameNumber}.</div>
                `
            } else {
                document.getElementById('result').innerHTML = `
                    <div id='result-red'>La bomba ha estallado!</div> 
                    <div class ='message'>Has elegido el número ${userNumber} y el número correcto era ${gameNumber}.</div>
                `
            }
        }

        Game.then(() => {
            gameNumber = Math.floor(Math.random() * 3) + 1;
            displayResult();
            console.log(gameNumber)
        })
    }
});
    
document.getElementById('restart').addEventListener('click', function restartGame(){
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('userInput').value = '';
    countdown = 5;
})

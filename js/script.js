let numberSelector = 0

const userInput = document.getElementById('userInput'),
      countDown = document.getElementById('countdown'),
      result    = document.getElementById('result'),
      restart   = document.getElementById('restart')

userInput.addEventListener('change', function() {
  numberSelector = userInput.value
})

function startGame() {
  startCountdown(5)
  const mysteryNumber = new Promise((resolve) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 3) + 1;
      resolve(randomNum)
      // return mysteryNumber
    }, 6000); //set interval son 6 vueltas (del 5 al 0)
  }) 
  return mysteryNumber
}

function startCountdown(count) {
  setInterval(() => {
    if (count >= 0) {
      countDown.innerHTML = `Cuenta atrás: ${count} segundos`;
      count--;
    } else {
      // clearInterval(countdownInterval);
      // countDown.innerHTML = '';
    }
  }, 1000);
}
  
startGame().then(number => {
  mensaje = ''
  if (number == numberSelector) {
    mensaje = `
    <span class="green">Enhorabuena, has salvado el mundo 👑</span>
    <p>Tu número ${numberSelector} es el mismo que el número ${number}</p>`
  } else {
    mensaje = `
    <span class="red">La bomba 💣💥 ha estallado</span>
    <p>Tu número ${numberSelector} no es el mismo que el número ${number}</p>
    `
  }
  result.innerHTML = mensaje
})

restart.addEventListener('click', function() {
  location.reload()
})










// function startGame() {
//   startCountdown(5)
//     .then((randomNum) => {
//       const userInput = document.getElementById('userInput').value;

//       if (userInput === '') {
//         document.getElementById('result').innerHTML = 'La bomba ha estallado. No has escrito nada. 💣';
//       } else if (userInput == randomNum) {
//         document.getElementById('result').innerHTML = '¡Has salvado el mundo!';
//       } else {
//         document.getElementById('result').innerHTML = `La bomba ha estallado. El número era: ${randomNum} 💣`;
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// function startCountdown(seconds) {
//   return new Promise((resolve, reject) => {
//     let count = seconds;
//     const countdownElement = document.getElementById('countdown');

//     const countdownInterval = setInterval(() => {
//       if (count > 0) {
//         countdownElement.innerHTML = `Cuenta atrás: ${count} segundos`;
//         count--;
//       } else {
//         clearInterval(countdownInterval);
//         countdownElement.innerHTML = '';
//         const randomNum = Math.floor(Math.random() * 3) + 1;
//         resolve(randomNum);
//       }
//     }, 1000);
//   });
// }

// function restartGame() {
//   document.getElementById('userInput').value = '';
//   document.getElementById('result').innerHTML = '';
//   startGame();
//}
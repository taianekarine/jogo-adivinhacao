// Variáveis
let xAttemps = 0
const randomNumber = Math.floor(Math.random() * 10)

let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// Funções de callback
const handleTryClick = (event) => {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttemps} tentativas!`; 
  }

  inputNumber.value = ""
  xAttemps++
  
  console.log(randomNumber)
  console.log(xAttemps)
}

const handleResetClick = () => {
  toggleScreen()
  xAttemps = 0
  randomNumber = Math.round(Math.random() * 10)
}

const toggleScreen = () => {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

// Eventos

btnTry.addEventListener(`click`, handleTryClick)
btnReset.addEventListener(`click`, handleResetClick)

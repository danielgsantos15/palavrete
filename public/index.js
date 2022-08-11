const tiles = document.querySelector(".tile-container");
const rows = 6;
const columns = 5;
const guesses = [];
const backspaceAndEnterRow = document.querySelector("#backspaceAndEnterRow")
let currentRow = 0
let currentColumn = 0
let attempt = []

showTable()
showKeyboard()
showBackspaceButton()
showEnterButton()
//  Mostrar o botão de enter na tela

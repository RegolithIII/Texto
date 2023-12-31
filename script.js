const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const subjects = [
  'Animal',
  'Fruit',
  'Pays',
  'Objet',
  'Film / Série',
  'Métier',
  'Prénoms',
  'Nourriture',
  'Ville',
  'Pays',
  'Célébrité',
  'Personnage',
  'Gros Mot',
  'Marque',
  'Sport',
  'Dégoutant'
];

const shape = [
  'Triangle.png',
  'Circle.png',
  'Square.png'
];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomLetter() {
  return getRandomElement(letters);
}

function generateRandomSubject() {
  return getRandomElement(subjects);
}

function generateRandomShape() {
  return getRandomElement(shape);
}

function displayRandomInfo() {
  const letter = generateRandomLetter();
  const subject = generateRandomSubject();

  document.getElementById('letter').textContent = `${letter}`;
  document.getElementById('subject').textContent = `${subject}`;
  /* document.getElementById('wordInput').value = ''; // Clear input field
  document.getElementById('result').textContent = ''; // Clear result text */
}

/* function checkWord() {
  const inputWord = document.getElementById('wordInput').value.toLowerCase();
  const startingLetter = document.getElementById('letter').textContent.split(' ')[1].toLowerCase();
  const resultElement = document.getElementById('result');

  if (inputWord.startsWith(startingLetter)) {
    resultElement.textContent = 'Correct!';
  } else {
    resultElement.textContent = 'Try again!';
  }
}

document.getElementById('checkButton').addEventListener('click', checkWord);
document.getElementById('wordInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkWord();
  }
}); */

function changeLetterShape() {
  const shape = generateRandomShape();
  document.getElementById('letter').style.backgroundImage = 'url('+shape+')';
}

document.getElementById('restartButton').addEventListener('click',() => {
  displayRandomInfo();
  changeLetterShape();
});

changeLetterShape();
displayRandomInfo();
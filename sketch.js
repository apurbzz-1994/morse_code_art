function setup(){
  createCanvas(600,600);
  background(255);
}

function draw(){
  renderGrid("Nabomita", 0, 0);
  renderGrid("Roy", 100, 0);
  renderGrid("Mukty", 200, 0);
  renderGrid("is", 0, 100);
  
}


//function that fills the grid with 0s and 1s to denote dot and dash
function generateWordGrid(theWord){
  let rows = theWord.length;
  let wordArray = new Array(rows);
  for(let i = 0; i < wordArray.length; i++){
    wordArray[i] = morseCodeEncoder(theWord[i]);
  }

  return wordArray;
}


//function that renders the grid
function renderGrid(theWord, offX, offY){
  let wordArray = generateWordGrid(theWord);
  let resX = 100/4;
  let resY = 100/(wordArray.length);
  for(let i = 0; i < wordArray.length; i++){
    for(let j = 0; j < wordArray[i].length; j++){
      let x = offX + (j * resX);
      let y = offY + (i * resY);
      noStroke();
      let letterCode = theWord[i].toUpperCase().charCodeAt(0);
      let colorValue = map(letterCode, 65, 90, 230, 20);
      fill(colorValue/2,colorValue/2,colorValue);
      ellipseMode(CORNER);
      if(wordArray[i][j] == 0){
        ellipse(x,y,resY, resY);
      }
      else if(wordArray[i][j] == 1){
        rect(x,y,resX,resY);
      }
    }
  }
}


//function that codes each letter to morse code
//Here, two means empty cell
function morseCodeEncoder(aLetter){
  let toCheck = aLetter.toUpperCase();
  switch (toCheck) {
    case "A":
      return [0,1,2,2];
      break;
    case "B":
      return [1,0,0,0];
      break;
    case "C":
      return [1,0,1,0];
      break;
    case "D":
      return [1,0,0,2];
      break;
    case "E":
      return [0,2,2,2];
      break;
    case "F":
      return [0,0,1,0];
      break;
    case "G":
      return [1,1,0,2];
      break;
    case "H":
      return [0,0,0,0];
      break;
    case "I":
      return [0,0,2,2];
      break;
    case "J":
      return [0,1,1,1];
      break;
     case "K":
      return [1,0,1,2];
      break;
    case "L":
      return [0,1,0,0];
      break;
    case "M":
      return [1,1,2,2];
      break;
    case "N":
      return [1,0,2,2];
      break;
    case "O":
      return [1,1,1,2];
      break;
    case "P":
      return [0,1,1,0];
      break;
    case "Q":
      return [1,1,0,1];
      break;
    case "R":
      return [0,1,0,2];
      break;
    case "S":
      return [0,0,0,2];
      break;
    case "T":
      return [1,2,2,2];
      break; 
    case "U":
      return [0,0,1,2];
      break;
    case "V":
      return [0,0,0,1];
      break;
    case "W":
      return [0,1,1,2];
      break;
    case "X":
      return [1,0,0,1];
      break;
    case "Y":
      return [1,0,1,1];
      break;
    case "Z":
      return [1,1,0,0];
      break;        
    default:
      return [2,2,2,2];
      break;
  }
}


//function that guesses emotion for each letter
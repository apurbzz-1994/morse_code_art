function setup(){
    createCanvas(900,900);
    background(250);
  }
  
  function draw(){
    renderSentenceGrid(900, 0, 0, "Baby you are all that I want");
    renderSentenceGrid(900, 0, 135, "When you are lying here in my arms");
    
  }
  
  function renderSentenceGrid(gridWidth, xOff, yOff, theSentence){
    let words = theSentence.split(" ");
    let cols = words.length;
    let colSize = gridWidth / cols;
    for(let i = 0; i < words.length; i++){
        let x = xOff + (i * colSize);
        let y = yOff;
        renderGrid(words[i], x, y, colSize);
    }
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
  function renderGrid(theWord, offX, offY, gridSize){
    let wordArray = generateWordGrid(theWord);
    let resX = gridSize/4;
    let resY = gridSize/(wordArray.length);
    for(let i = 0; i < wordArray.length; i++){
      for(let j = 0; j < wordArray[i].length; j++){
        let x = offX + (j * resX);
        let y = offY + (i * resY);
        noStroke();
        let letterCode = theWord[i].toUpperCase().charCodeAt(0);
        let colorValue = map(letterCode, 65, 90, 230, 20);
        fill(colorValue);
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
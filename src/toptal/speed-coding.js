const solutions = {
    'cube': `return x * x * x;`,  // 41
    'multiplierCount': `return x > y ? Math.floor(x / y) : Math.floor(y / x);`, // 107
    'squareRoot': `return Math.sqrt(x);`, // 106
    'removeAllSpaces': `return x.replace(/\\s/gi, "");`, // 18
    'matchingType': `return typeof x === typeof y;`,
    'reverseString': `return x.split("").reverse().join("");`,
    'findAverage': `return Math.ceil(x.reduce((sum,current)=>{return sum+current},0)/x.length);`,
    'numberRepresentation': `if(arr.length===0){return 0}let representation=Object.values(arr.sort().reduce((rep,current)=>{if(!rep[current]){rep[current]=0}rep[current]+=1;return rep},{})).join("");return Number(representation);`,
    'countUniqueNumbers': `let uniqueNumbers=new Set(x);return Array.from(uniqueNumbers).length;`,
    'twoArrayAvg': `const avgX=x.reduce((sum,current)=>{return sum+current},0)/x.length;const avgY=y.reduce((sum,current)=>{return sum+current},0)/y.length;return(avgX+avgY)/2;`,
    'numberOfCircles': `let sum=0;num1=x.toString().match(/[0698]/g);if(num1==null){return(sum=0)}else{sum+=num1.length}for(let i=0;i<num1.length;i+=1){if(num1[i]==8){sum+=1}}return sum;`,
    'firstUniqueChar': `let charsMap={};for(let i=0;i<x.length;i+=1){if(!charsMap[x[i]]){charsMap[x[i]]=0}charsMap[x[i]]+=1}for(let i=0;i<x.length;i+=1){if(charsMap[x[i]]==1){return x[i]}}return false;`,
    'hexToRGB': `let rgb=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(x);return rgb?[parseInt(rgb[1],16),parseInt(rgb[2],16),parseInt(rgb[3],16)]:null;`,
    'hashPassword': `let result="";const reverseCase=(character)=>{return character===character.toLowerCase()?character.toUpperCase():character.toLowerCase()};const shift=(char,x)=>{let charShift;const code=char.charCodeAt(0);if(code>=65&&code<91){charShift=String.fromCharCode(((code+x-65)%26)+65)}else if(code>=48&&code<=57){charShift=String.fromCharCode(((code+x-48)%10)+48)}else{charShift=String.fromCharCode(((code+x-97)%26)+97)}return charShift};for(let i=0;i<password.length;i+=1){const char=shift(password[i],x);result+=reverseCase(char)}return result;`,
    'romanToInt': `let result=0;let current=0;let previous=0;const values=new Map([["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]]);for(const char of x.split("").reverse()){current=values.get(char);if(current>=previous){result+=current}else{result-=current}previous=current}return result;`,
    'validateIP': `let ipformat=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return x.match(ipformat);`,
    'ticTacToeWinner': `winners=new Set();for(let i=0;i<3;i+=1){if(x[0][i]!==""&&new Set([x[0][i],x[1][i],x[2][i]]).size===1){winners.add(x[0][i])}}for(let i=0;i<3;i+=1){if(x[i][0]!==""&&new Set(x[i]).size===1){winners.add(x[i][0])}}if(x[1][1]!==""&&(new Set([x[0][0],x[1][1],x[2][2]]).size===1||new Set([x[0][2],x[1][1],x[2][0]]).size===1)){winners.add(x[1][1])}if(winners.size===2){return "error"}if(winners.size===0){if(x.every((y)=>y.every((z)=>z))){return "draw"}return "incomplete"}return winners.values().next().value;`,
    'averageAsciiChar': `let sumChars=0;for(let c of x){sumChars+=c.charCodeAt(0)}return String.fromCharCode(Math.round(sumChars/x.length));`
  };
const submitButton = () => document.querySelector('#page_react_container > div > div._2yPo9pns > div._1PMD-pi1 > div > button');
const solve = () => {
   const aceEditor = ace.edit(document.querySelector('.ace_editor'));
   const submission = aceEditor.getValue();
   const regexTask = /box\.(.*) =/g;
   const key = (regexTask.exec(submission))[1];
   aceEditor.moveCursorTo(1,0);

   if (submission.includes('box.' + key + ' ')) {
      aceEditor.insert(solutions[key])
      submitButton().click()
      setTimeout(() => {
         submitButton().click();
         setTimeout(() => { solve()}, 390);
      }, 20);
      return
   }
}
solve();

/**
 * https://speedcoding.toptal.com/challenge?ch=collision-2022
 * https://speedcoding.toptal.com/start/BmFLhED1
 */

/*
Given x is a number
return x cubed
*/
box.cube = function (x) {
   return x * x * x;
};

// x and y are numbers
// return a number
// (ex. x=10, y=5, you should return 2)
// (ex. x=11, y=2, you should return 5)
box.multiplierCount = function multiplierCount(x, y) {
   return x > y ? Math.floor(x / y) : Math.floor(y / x);
};

/**
Given x is a number,
find the square root of x.
 */
// x is a number
// return a number
box.squareRoot = function squareRoot(x) {
    return Math.sqrt(x);
 };

/**
Given x is a string,
return the string after removing all spaces.
*/
// x is a string
// return a string
// (ex. x="   Test   String! ", you should return "TestString!")
box.removeAllSpaces = function removeAllSpaces(x) {
   return x.replace(/\s/gi, "");
};

/*
Given x and y are random data types,
return true if x and y are the same data type.
*/
// x and y are random types
// return boolean
// (ex. x = 7 and y = "Toptal", should return false),
// (ex. x = 10 and y = 100, should return true),
box.matchingType = function matchingType(x, y) {
   return typeof x === typeof y;
};

/*
Given x is an array of numbers,
find the average of x and if it is not a whole number, round it up.
*/
// x is an array of numbers
// return a number
// (ex. x=[1,2,3,4] then you should return 3 because the average is 2.5)
box.findAverage = function findAverage(x) {
   return Math.ceil(
      x.reduce((sum, current) => {
         return sum + current;
      }, 0) / x.length
   );
};

// x is a string
// return a string
// (ex. x="Hello from Toptal", you should return "latpoT morf olleH")
box.reverseString = function reverseString(x) {
   return x.split("").reverse().join("");
};

/**
Given arr is an array of characters (a-z),
sort the array alphabetically and return a number representation for every character that occurred.
// arr is an array
// return a number
// (ex. arr=[b,a,a,a,c,b,a] you should return 421 where 4 represents 'a' occurences, 2 for 'b', etc..) 
 */
box.numberRepresentation = function numberRepresentation(arr) {
   if (arr.length === 0) return 0;

   let representation = Object.values(
      arr.sort().reduce((rep, current) => {
         if (!rep[current]) {
            rep[current] = 0;
         }
         rep[current]++;

         return rep;
      }, {})
   ).join("");

   return Number(representation);
};

/*
Given x is an array,
find the count of unique numbers in x.
*/
// x is an array of numbers
// return a number
// (ex. x=[1,2,2,2,3,4,20,3] you should return 5 as we have 1,2,3,4,20)
box.countUniqueNumbers = function countUniqueNumbers(x) {
   let uniqueNumbers = new Set(x);

   return Array.from(uniqueNumbers).length;
};

/*
Given x is a number,
some digits have circles in their design (ex. 6, 9, 0 has one circle and 8 has two circles).
Count all circles of a given number.
*/
// x is a number
// return a number
// (ex. x=1908, you should return 4)
// (ex. x=9 you should return 1)
box.numberOfCircles = function numberOfCircles(x) {
   let sum = 0;
   num1 = x.toString().match(/[0698]/g);

   if (num1 == null) {
      return (sum = 0);
   } else sum += num1.length;

   for (let i = 0; i < num1.length; i++) {
      if (num1[i] == 8) sum += 1;
   }
   return sum;
};

/*
Given x and y are arrays of numbers,
find the average of the arrays’ averages.
// x and y are arrays of numbers
// return a number
// (ex. x=[1,2,3],  y=[4,5,6], you should return 3.5)
*/
box.twoArrayAvg = function twoArrayAvg(x, y) {
   const avgX =
      x.reduce((sum, current) => {
         return sum + current;
      }, 0) / x.length;
   const avgY =
      y.reduce((sum, current) => {
         return sum + current;
      }, 0) / y.length;
   return (avgX + avgY) / 2;
};

/*
Given x is a string,
find the first unique character in x.
Return false if there isn't a unique character in x.
// x is a string
// return a string
// (ex. x="toptal", you should return "o" because "t" appeared twice)
*/
box.firstUniqueChar = function firstUniqueChar(x) {
   let charsMap = {};
   for (let i = 0; i < x.length; i++) {
      if (!charsMap[x[i]]) {
         charsMap[x[i]] = 0;
      }
      charsMap[x[i]]++;
   }

   for (let i = 0; i < x.length; i++) {
      if (charsMap[x[i]] == 1) {
         return x[i];
      }
   }

   return false;
};

/*
Given x is a string,
find the average of ASCII codes of all characters and round to the closest integer, then return the character representing that ASCII code.
// x is a string
// return a character
// (ex. x="Hello World!", you should return "Z")
*/
box.averageAsciiChar = function averageAsciiChar(x) {
   let sumChars = 0;

   for (let c of x) {
      sumChars += c.charCodeAt(0);
   }

   return String.fromCharCode(Math.round(sumChars / x.length));
};

/*
Given x is a HEX color code (ex. #FFFFFF),
convert that HEX color code to RGB and return it as an array [R, G, B].
// x is a string
// return an array
// (ex. x="#FFFFFF", you should return [255, 255, 255])
*/
box.hexToRGB = function hexToRGB(x) {
   let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);
   return rgb
      ? [parseInt(rgb[1], 16), parseInt(rgb[2], 16), parseInt(rgb[3], 16)]
      : null;
};

/*
Given password is a string, which consists of mixed characters (a-z, A-Z, 0-9), and x is an integer,
hash the password by shifting every character by given x positions and reverse to lowercase/uppercase.
*/
// password is a string, x is a number
// return a string
// (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
box.hashPassword = function hashPassword(password, x) {
   let result = "";
   const reverseCase = (character) => {
      return character === character.toLowerCase()
         ? character.toUpperCase()
         : character.toLowerCase();
   };
   const shift = (char, x) => {
      let charShift;
      const code = char.charCodeAt(0);
      if (code >= 65 && code < 91) {
         charShift = String.fromCharCode(((code + x - 65) % 26) + 65);
      } else if (code >= 48 && code <= 57) {
         charShift = String.fromCharCode(((code + x - 48) % 10) + 48);
      } else {
         charShift = String.fromCharCode(((code + x - 97) % 26) + 97);
      }

      return charShift;
   };

   for (let i = 0; i < password.length; i++) {
      const char = shift(password[i], x);
      result += reverseCase(char);
   }
   return result;
};

// x is a string; roman numeral
// return a number
// (ex. x="IV", you should return 4)
box.romanToInt = function romanToInt(x) {
   let result = 0;
   let current = 0;
   let previous = 0;
   const values = new Map([
      ["I", 1],
      ["V", 5],
      ["X", 10],
      ["L", 50],
      ["C", 100],
      ["D", 500],
      ["M", 1000],
   ]);

   for (const char of x.split("").reverse()) {
      current = values.get(char);
      if (current >= previous) {
         result += current;
      } else {
         result -= current;
      }
      previous = current;
   }
   return result;
};

box.validateIP = function validateIP(x) {
   let ipformat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
   return x.match(ipformat);
};

/*
Given x is an array that includes 3 child arrays, every child represents a row of a tic tac toe matrix,
find the winner of the game and return 'x', 'o' or 'draw', and 'error' if there are two winners.
*/
// x is an array that includes 3 child arrays, every child represents a row of a tic tac toe matrix
// return 'x', 'o', or 'draw'
// (ex. x=[["x", "o", "x"], ["o", "x", "o"], ["o", "o", "x"]],
// you should return 'x' because 'x' player is the winner)
box.ticTacToeWinner = function ticTacToeWinner(x) {
   winners = new Set();

   // columns check
   for (let i = 0; i < 3; i++) {
      if (x[0][i] !== "" && new Set([x[0][i], x[1][i], x[2][i]]).size === 1) {
         winners.add(x[0][i]);
      }
   }

   // rows check
   for (let i = 0; i < 3; i++) {
      if (x[i][0] !== "" && new Set(x[i]).size === 1) {
         winners.add(x[i][0]);
      }
   }

   // diagonals check
   if (
      x[1][1] !== "" &&
      (new Set([x[0][0], x[1][1], x[2][2]]).size === 1 ||
         new Set([x[0][2], x[1][1], x[2][0]]).size === 1)
   ) {
      winners.add(x[1][1]);
   }

   if (winners.size === 2) {
      return "error";
   }

   // completion check
   if (winners.size === 0) {
      if (x.every((y) => y.every((z) => z))) {
         return "draw";
      }

      return "incomplete";
   }

   return winners.values().next().value;
};

/**
 * Edwin Torres
 * etorres.net@gmail.com
 *
 * https://www.linkedin.com/in/edwintorresdeveloper/
 *
 * https://speedcoding.toptal.com/start/zrFWhGok
 * https://speedcoding.toptal.com/start/y9FahPwD
 * I think Toptal is a great company. This was just my first attempt. I'm just warming up.
 * I think Toptal is a great company. This was just my second attempt :)
 * I think Toptal is a great company. This was just my third attempt. So it's time to change the strategy and make it better and faster.
 * I think Toptal is a great company. This was just my fourth attempt. Improving the technique, when I get the all scripts, I'm going to automate.
 * I think Toptal is a great company. This was just my fith attempt. After hours I'm going to continue.
 * I think Toptal is a great company. This was just my sixth attempt. I'm almost there, to complete the exercises and start automating.
 * I think Toptal is a great company. This was just my seventh attempt. Now it's time to automate the process.
 * I think Toptal is a great company. This was just my eighth attempt. I'm automating the process
 * I think Toptal is a great company, and this challenges needs another approach to avoid using the UI.
 */

/*

page_react_container
#page_react_container > div > div._2yPo9pns > div._1PMD-pi1 > div > button

document.querySelector('#page_react_container textarea').innerHTML = 'Hello';
document.querySelector('.ace_text-input').textContent
https://www.toptal.com/javascript/coding-challenge-retrospective
*/
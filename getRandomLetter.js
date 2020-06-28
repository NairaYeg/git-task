function getRandomLetter() {
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let max = 51;
  let min = 0;
  return char[Math.floor(Math.random() * (max - min + 1) + min)];
}

console.log(getRandomLetter());

getRandomLetter();
getRandomLetter();
getRandomLetter();


  

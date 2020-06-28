
  function getRandomLetter() {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // console.log(char.length)
    return char[Math.floor(Math.random() * 51)];
  }
  
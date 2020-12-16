

function randomArray() {

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
    
    let total = 25;
  // let trueNum = Math.floor(Math.random() * 15) + 1;
  let trueNum = getRndInteger(0, 1)
    let falsenum = total-trueNum
    let numArray = []
    var i;
for (i = 0; i < falsenum; i++) {
  numArray.push(false)
}
for (i = 0; i < trueNum; i++) {
  numArray.push(true)
  }
  
  console.log(trueNum)
  console.log(falsenum)

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
    }  
return shuffle(numArray)    
} 




  
export default randomArray;
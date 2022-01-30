function celciousToFar(celcious) {
  let result = (celcious * 9) / 5 + 32;
  return result;
}
let myCelc = 25;
let output = celciousToFar(myCelc);
console.log(myCelc + " Celcious = To ", output + "Farhenheit");

// (29°C × 9/5) + 32

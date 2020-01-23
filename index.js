var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(newName){
  kittens.push(newName)
  return kittens
}
function destructivelyPrependKitten(newName){
  kittens.unshift(newName)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
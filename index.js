// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(word){
   return word.toLowerCase() === string.toLowerCase()
  })
}

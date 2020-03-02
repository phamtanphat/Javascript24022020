// 10 : vong lap
const arrayNumber = [1,2,3,4,5,6,7,8,9,10]
// for(var i = 0 ; i < arrayNumber.length ; i++){
//     if(arrayNumber[i] % 2 != 0) continue
//     console.log(arrayNumber[i])
// }
var a = 0
arrayNumber.forEach(function(element){
    if(element % 2 == 0) console.log(element)
    a = element
});
console.log(a)
// 13 : Call back
// function getName(name , dosth){
//     return dosth(name)
// }

// function sayHi(value){
//     return "Say hi " + value
// }

// console.log(getName("Phat",sayHi))

// 
// function arrayDouble(numbers , dosth){
//     for(var i = 0 ; i < numbers.length ; i++){
//         numbers[i] = dosth(numbers[i])
//     }
//     return numbers
// }
// function doubleNumber(number){
//     return number * number
// }
// console.log(arrayDouble([1,2,3,4,5],doubleNumber))

function getName(dosth){
    dosth()
}

getName(console.log)


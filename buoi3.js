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

// function getName(dosth){
//     dosth()
// }
// getName(console.log)
// 1 - 100
// In so chan
// In so le
// In so chia 3 du 1
// In so chinh phuong (can 2)

// In So chan
// for(var i = 1 ; i <= 100 ; i++){
//     if( i % 2 == 0) console.log(i)
// }
// In So le
// for(var y = 1 ; y <= 100 ; y++){
//     if( y % 2 == 1) console.log(y)
// }


// In So chia 3 du 1
// for(var z = 1 ; z <= 100 ; z++){
//     if( z % 3 == 1) console.log(z)
// }
// In So chinh phuong
// for(var e = 1 ; e <= 100 ; e++){
//     if(Math.sqrt(e) % 1 == 0) console.log(e)
// }

// function handleNumber(dosth){
//     for(var i = 1 ; i <= 100 ; i++){
//        const dk = dosth(i)
//        if(dk) console.log(i)
//     }   
// }
// handleNumber(function(number){
//     if(Math.sqrt(number) % 1 == 0) return true
//     return false
// })

// 14 : Ham map
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = numbers.map(function(value){
//     if(value > 5) return value * 2
//     return value
// })

// Array.prototype.myMap = function(cb){
//     const newArray = []
//     for(var i = 0 ; i < this.length ; i++){
//         newArray.push(cb(this[i]))
//     }
//     return newArray
// }
// const newNumbers = numbers.myMap(function(value){
//     if(value > 5) return value * 2
//     return value
// })
// console.log(newNumbers)

// const arraySinhvien = [
//     {name : 'Teo',age : 15},
//     {name : 'Ti',age : 12},
//     {name : 'Tun',age : 11},
// ]
// const arrayAge = arraySinhvien.map(function(value){
//     return value.age
// })
// console.log(arrayAge)

// 15 : Ham filter
// const arraySinhvien = [
//     {name : 'Teo',age : 15},
//     {name : 'Ti',age : 12},
//     {name : 'Tun',age : 11},
// ]
// const newArraySinhvien = arraySinhvien.filter(function(sinhvien){
//     if(sinhvien.age > 12) return true
//     return false
// })
// console.log(newArraySinhvien)

// const arraySinhvien = [
//     {name : 'Teo',age : 15},
//     {name : 'Ti',age : 12},
//     {name : 'Tun',age : 11},
// ]
// Viet phuong thuc tra ve 1 mang moi 
// . Mang se chua phan tu co so tuoi chan va khi chi cho 2 phai lon hon 5


// 15 : Ham reduce
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// const value = arrayNumbers.reduce(function(previous,current,index){
//     console.log(previous)
//     return previous + current
// },1);

// Trả về số lượng người đã vote
// function totalVotes(arr) {
//     const value = arr.reduce(function(previous , currentValue){
//         if(currentValue.voted){
//             return previous + 1
//         }
//         return previous
//     },0);
//     console.log(value)
// }
// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters) // 7

// Tính tổng giá trị các món bên dưới
// function shoppingSpree(arr) {
//     const value = arr.reduce(function(previous , currentValue){
//         return previous + currentValue.price
//     },0)
//     console.log(value)

// }

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
// shoppingSpree(wishlist) // 227005

// function countOccurrences(arr) {
//     const value = arr.reduce(function(previous , currentValue){
//         if(currentValue in previous){
//             previous[currentValue]++
//         }else{
//             previous[currentValue] = 1
//         }
//         return previous
//     },{})
//     console.log(value)

// }
// countOccurrences(["a", "b", "c", "b", "a", "a"]);

// const arraySinhvien = [
//     {name : 'Teo' , age : 10},
//     {name : 'Ti' , age : 20},
//     {name : 'Tuan' , age : 15}
// ]
// Ket hop phuong thuc map va reduce de tinh tong tuoi
// const total = arraySinhvien.map(function(sinhvien){
//     return sinhvien.age
// }).reduce(function(pre , current){
//     return pre + current
// })
// console.log(total)

// 16 : Ham sort
//const arrayChar = ['a','b','e','c','f','d']
// const arrayNumbers = [9,1,2,8,4,6,5,0,10,3,7]
// const newArrayChar = arrayNumbers.sort(function(a , b){
//     return b - a
// })
// console.log(newArrayChar)

// 17 : Khoi tao ra object

// function Sinhvien(name , age , address){
//     this.name = name;
//     this.age  = age;
//     this.address = address;
//     this.sayHello = function(){
//         return "hello"
//     }
// }

// Sinhvien.prototype.school = function(){
//     return "Trung tam khoa pham"
// }

// const teo = new Sinhvien("Nguyen Van Teo", 20 , "38 nguyen lam")
// const ti = new Sinhvien("Nguyen Van Ti", 15 , "Quan 1")

// console.log(teo.school == ti.sayHello)

//18 : Toan tu ba ngoi
// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
    var b;
    if (a > 0) {
      b = 1;
    } else if (a < 0) {
      b = 2;
    } else {
      b = 3;
    }
    return b;
  }
  
  function doSomethingTernary(a) {
      const b = a < 0 ? 2 : (a > 0 ? 1 : 3) 
      return b
    
  }
  console.log(doSomethingTernary(3))
  console.log(doSomething(3))
  
  // Test 2 hàm trên với cùng đầu vào
  
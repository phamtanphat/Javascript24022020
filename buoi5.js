// var mouse = {
//     name : 'Mickey',
//     sayhi : function() {
//       console.log('Hi, my name is' , this.name)
//     }
//   }
// const coppy = mouse.sayhi
// coppy.bind({name : "Chuot"})()

// Arrow function va function

// const arrayNames = ["Teo","Ti","Tun","Hoa"]

// const newArraysNames = arrayNames.map(function(value){
//     return value + " A1"
// })
// const newArraysNames = arrayNames.map( value => value + " A1")

// const newArraysNames = arrayNames.map( value => {
//     value = value.toUpperCase();
//     return value + " A1"
// })
// console.log(newArraysNames)

// const teo = {
//     name : "Nguyen Van Teo",
//     age : 5,
//     sayhi : function(){
//         var sayHi2 = () => {
//             console.log(this.name)
//         }
//         sayHi2()
//     }
// }
// teo.sayhi()

// Arguments : gia tri dau vao cua function

// function sum(){
//     const numbers = Array.from(arguments)
//     return numbers.reduce((sum , num) => sum + num)
// }
  
//   console.log(sum(1,2,3,4,5,6))

//Default

// function showInfo(name , age = 0 , address = ""){
//     console.log(name , age , address)
// }
// showInfo("Teo")

// Call
const teo = {
    name : "Nguyen Van Teo",
    age : 10
}
function greeting(name,age){
    console.log(`Hi! ${name} . I am ${age}`)
  }
greeting.call(null ,teo.name , teo.age )
  
  
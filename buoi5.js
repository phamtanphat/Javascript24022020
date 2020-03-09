// var mouse = {
//     name : 'Mickey',
//     sayhi : function() {
//       console.log('Hi, my name is' , this.name)
//     }
//   }
// const coppy = mouse.sayhi
// coppy.bind({name : "Chuot"})()

// Arrow function va function

const arrayNames = ["Teo","Ti","Tun","Hoa"]

// const newArraysNames = arrayNames.map(function(value){
//     return value + " A1"
// })
const newArraysNames = arrayNames.map( value => {
    value = value.toUpperCase();
    return value + " A1"
})
console.log(newArraysNames)
// 1 : Khai bao bien
// var a = 10
// a = "Hello"
// let b = 20
// const c = 30
// c = 40
// console.log(c)

//2 : Kieu du lieu
// Cac truong hop gap undefined
//Th1 : Khai bao nhung khong truyen gia tri
// var va let khong khai bao thi undefined nhung const thi khogng duoc
// const a 
// console.log(a)
//Th2 : Goi thuoc tinh khong ton tai trong object
//Th3 : Phuong thuc khong co return hoac chi co tu khoa return 

// 3 : Kieu object
// var teo = {name : "Nguyen Van Teo",age : 10}
// console.log(teo['name'])

//4 : Kieu Array
// const arrayNumber = []
// arrayNumber[0] = 10
// console.log(arrayNumber)

// 5 : Toan tu
// + - * / % ++ -- 
// var a = 5
// var b = 6
// var c = ++a - --b + ++b + a-- - b++
// 6 - --b + ++b + a-- - b++ ; a : 6 , b : 6
// 6 - 5 + ++b + a-- - b++ ; a : 6 , b : 5
// 6 - 5 + 6 + a-- - b++ ; a : 6 , b : 6
// 6 - 5 + 6 + 6 - 6 ; a : 6 , b : 6
// 7
// dap an : 7

// console.log(b)

//7 : Function
// function showName(){
//     return
// }
// console.log(showName())

// 8 : Object method
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10,
//     getName : function(){
//         return this.name
//     }
// }

// console.log(teo.getName())
//Template string
const rectangle = {
    witdh : 10,
    height : 20,
    getWidth : function(){
        return this.witdh
    },
    getHeight : function (){
        return this.height
    },
    getArea : function (){
        return `Dien tich ${this.witdh  * this.height}`
    }
}

console.log(rectangle.getArea())
// console.log(rectangle.getWidth())
// console.log(rectangle.getHeight())



// 10 : vong lap
// const arrayNumber = [1,2,3,4,5,6,7,8,9,10]
// for(var i = 0 ; i < arrayNumber.length ; i++){
//     if(arrayNumber[i] % 2 != 0) continue
//     console.log(arrayNumber[i])
// }
// var a = 0
// arrayNumber.forEach(function(element){
//     if(element % 2 == 0) console.log(element)
//     a = element
// });

// var a = 5
// do {
//     console.log(a)
// } while (a < 5);
var a = [1, 2, 4, 8, 16];
/**
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */
// for(var i = a.length - 1 ; i > -1 ; i--){
//     console.log(a[i])
// }

// 11 : For in , for of
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const teo = {
//     name : "Teo",
//     age : 10
// }
// for(const props in teo){
//     console.log(props)
// }
// for(const value of numbers){
//     console.log(value)
// }
var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
// for(const key in apartment){
//     console.log("Key apartment: " + key)
//     for(const keybedrom in apartment[key]){
//         console.log("Key bedrom : " + keybedrom)
//         for(const keybed in apartment[key][keybedrom]){
//             console.log("Key bed : " +keybed)
//         }
//     }
// }
function getKey(object){
    for(const key in object){
        console.log(key)
        if(typeof object[key] === 'object')getKey(object[key])
    }
}
getKey(apartment)
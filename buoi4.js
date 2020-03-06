// 15 : Ham reduce
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// const value = arrayNumbers.reduce(function(previous,current,index){
//     console.log(previous)
//     return previous + current
// },1);

// Trả về số lượng người đã vote
function totalVotes(arr) {
    const value = arr.reduce(function(previous , currentValue){
        if(currentValue.voted){
            return previous + 1
        }
        return previous
    },0);
    console.log(value)
}
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
totalVotes(voters) // 7
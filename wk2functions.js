//function one: create a counter
// //Create a variable to count
// var count = 0;
// //create a function to increase count by 1 on run
// function increment(){
//     return count +=1;
// }
// increment();
// console.log("the count is "+count);
// increment();
// console.log("the count is "+count);
// increment();
// console.log("

//function one: method 2:
//have var inside the function
//
// function myFunc(){
//   var count = 0
//   return {
//     getCount: function(){
//        console.log(count)
//     },
//     increment: function(){
//        return count++
//     },
//     decrement: function(){
//       return count--
//     }
//   };
// }
// var mycount = myFunc()
// mycount.getCount()
// mycount.increment()
// mycount.getCount()
// mycount.increment()
// mycount.getCount()
// mycount.increment()
// mycount.increment()
// mycount.getCount()
// mycount.decrement()
// mycount.getCount()

// //method 3: enclosures
// function counter (){
//   var count=0
//   function increment(){
//     count++
//     console.log(count);

//   }
//   return increment
// }
// //RETURN will kill the local scope inside the functions
//
//
// //create variable that calls on function
// var incrementCounter = counter();
// //^counter will run with count starting at 0 then increase each time it's run
// //if you were to call for count from the function outside of it it wont exist
// incrementCounter()
// //Output 1
// incrementCounter()
// //output 2
// incrementCounter()
// //output 3

//Method 4: write a function that takes in an array and returns all items within it that fufil a criteria

//
// var nums = [1,2,3,5,7,5,2,33,4,5,55,9,0]
//
// // function findEvens(num,evenorodd){//if you're asking for even, evenorodd is 1, odds, 0
// //   return (num%2 === evenorodd)
// //   //returns if not odd
// // }
// //create new variable using .filter on the array using the findEvens function as argument
// let evens = nums.filter(function (nums,))
// //evens will be filtered out and logged in console on next step
// console.log(evens);
//



///////RETURN EVEN ODDS
// var nums = [1,2,3,5,7,5,2,33,4,5,55,9,0]
//
// function evenOdd(array,evenorodd){
//   var out=[]
//   for(i in array){
//     if (array[i]%2===evenorodd){
//       out.push(array[i])
//     }
//   }
//   return out
// }
// console.log(evenOdd(nums,1))


function messageCollectorService(){
  var collect = []
  return{
    addMessage: function(message,num){
        collect.push({body:message,id:num})
      },
    getMessage: function(){
      return collect
    }
  }
}

var collected = messageCollectorService()
collected.addMessage('this is a message',1)
collected.addMessage('this is also a message',2)
collected.addMessage('this is another message',3)

console.log(collected.getMessage());

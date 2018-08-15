/*Loop Practice
The Odd and Even

Write a JavaScript function that will iterate from 0 to 15. For each iteration,
it will check if the current number is odd or even, and display a message to the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"*/
//ODD AND EVEN EXERCISE
//Start at Zero, Loop until 15, i + 1 each time
/*for(i=0; i <=15; i++) {
    if (i % 2 === 0) {
      // ^^ divide number by 2, if remainder is zero it's EVEN
      console.log(i + ' is even.');
    } else {
      console.log(i + ' is odd.');
    }
  }


console.log();
*/

/*
// The Fizz Buzz
//
// Write a JavaScript program which iterates the integers from 1 to 100.
//
// But for multiples of three print "Fizz" instead of the number
// and for the multiples of five print "Buzz".
//
// For numbers which are multiples of both three and five print "FizzBuzz".
// /*FIZZ BUZZ EXERCISE
//
//Start at 0, Stop at 100, Increase by 1
for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0)
  //if they are multiples of 3 and 5^^ divide by 3 and 0 remainder, divide by 5 and 0 remainder
  {
    console.log(i + 'FizzBuzz');
  } else if (i % 3 === 0)
  //multiple of 3, divide by 3 remainder 0
  {
    console.log(i + 'Fizz');
  } else if (i % 5 === 0)
  //multiple of 5, divide by 5 remainder 0;
  {
    console.log(i + 'Buzz')
  }

}

console.log();
*/




/*FOR LOOP to WHILE
For to While

Re-write the following as a while loop:
//start at 0, stop at 10, i+1
for (var i=0; i<10; i++) {
  console.log(i);}
*/
/*
var a=0
while (a<10) {
console.log(a);
a= a+1;
}
What is the value of i after the loop? Is it the same in both cases?
SAME, 9 */



//WHILE LOOP to For Loop
//Re-write the following as a for loop:
var a = 10;
while (a > 0) {
  console.log(a);
  a = a - 1;
}

for (i=10; i > 0; i--){
  console.log(i);
}
//Start at 10, Run until 0, decrease by 1 each time

//Create function that creates car objects with make, year, car color
function createCar(carmake, caryear, carcolor, max) {
  var speed = 0;
  //variable speed added for Story 2 below
  return {
    make: carmake,
    year: caryear,
    color: carcolor,
    maxSpeed: max,
    //create a function that returns make model year and color as a string
    getCar: function() {
      return "make: " + this.make + " year: " + this.year + " color: " + this.color
    },
    //
    // Story 2
    //
    // The car can accelerate, brake, and tell you its speed.
    //
    // Challenges:
    // Add a speed variable to the closure of the car object.

    //Add the following functions to the object:
    // getSpeed: returns current speed
    // accelerate: increases the speed by 10mph (but does not return anything)
    // brake: decreases the speed by 7mph (but does not return anything)

    getSpeed: function() {
      return speed;
    },
    //accelate by intervals of 10, stop and log when we try to accelerate past the max speed
    accelerate: function() {
      speed = speed + 10;
      if(speed>=this.maxSpeed){
        speed = this.maxSpeed
        console.log("can't go higher than "+this.maxSpeed+"mph")
      }
    },
    brake: function() {
      //slow down by a random value, that is no larger than half of the current speed
      speed = speed - Math.floor(Math.random() *  speed/2)
    //if statement below will prevent negative speed by changing to zero
      if(speed<0){
        speed=0
      };
    }
  };
}
//creating a variable calling on the createCar function with the objects keywords
var mycar = createCar("toyota", 1998, "blue",85);
// console.log(mycar.getCar())
// console.log(mycar.getSpeed())
// console.log(mycar.accelerate());
//  mycar.accelerate()
//  mycar.accelerate()
//  mycar.accelerate()
//  mycar.accelerate()
//  mycar.accelerate()
// mycar.accelerate()
// mycar.accelerate()
// mycar.accelerate()
// console.log(mycar.getSpeed())
// mycar.accelerate()
// console.log(mycar.getSpeed());
// console.log(mycar.getSpeed());
// mycar.brake();
// mycar.brake();
// mycar.brake();
// console.log(mycar.getSpeed());
//getSpeed shows the speed of the car after the increases/decreases from accelerate/brake

//function to check speed.... while loop with if/else statement.
//if speed is < target, accelerate
//else if speed is > targets, brake to
// //funtion toSpeed, take a car to a specified specified speed

function toSpeed (car, target){
  if(car.maxSpeed<target){ //check if we want to go faster than the car can go
    console.log("the car can't go that fast") //log the speed each time we loop
  }
  while (car.getSpeed()!=target){ //change the speed until we reach the one we want
    console.log("current speed is "+car.getSpeed()) //if the car is too slow, go faster
    if(car.getSpeed()<target){
      car.accelerate()
    }
    else if(car.getSpeed()>target)//if the car is too fast, slow down
      car.brake()
    }
    console.log("the final speed is "+car.getSpeed())
  }
toSpeed(mycar,85)
//NOTE: can't hit arbirarty values under brake()-1 under the maximum speed

// i=0; i <=7,
// start 0mph; accelerate <= 7; accelerate ++;
//
// for (let i = 0; i <=7) {
//   i++;
//   accelerate();
// }

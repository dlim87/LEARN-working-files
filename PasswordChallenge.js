//PASSWORD CHECKER CHALLENGE//

//You're writing user reg page for a secure website//
//On reg page, user has to enter ID/Password which has to adhere to following
// *USER ID cannot ==== Password, cannot contain !#$
// >= 6 characters
//PASSWORD has to have one of $#!, cannot be "password"

//Implement Functions to perform checks
function registration(username, password) {
  return {
    user: username,
    pass: password,
    //checkReg is a function containing if statements for the criteria above^^
    checkReg: function() {
      //boolean variable, if true the console log will explain what was invalid
      var error = false
      //username cannot be same as password
      if (username === password) {
        console.log('Username cannot be same as password')
        //return false;
        error = true
      }
      //username has to be at least 6 chars
      if (username.length < 6) {
        console.log('Username must be at least 6 characters long.')
        //return false;
        error = true
      } //pass has to be at least 6 chars
      if (password.length < 6) {
        console.log('Password must be at least 6 characters long.')
        error = true
        //return false;
        //password cannot be 'Password', toUpperCase will convert any variation to PASSWORD to check
      }
      if (password.toUpperCase() === 'PASSWORD') {
        console.log('Password cannot be "Password".')
        //return false;l
        error = true
        //password has to include $,# or!. (!password.includes means it DOESNT include)
      }
      if (!(password.includes("$") || password.includes("#") || password.includes("!"))) {
        console.log('Password must include special character: #,!,$')
        // return false;
        error = true
        //username cannot include $ ! #
      }
      if (username.includes("$") || username.includes("#") || username.includes("!")) {
        console.log('Username cannot include special characters')
        // return false;
        error = true
      }
      //password has to have 1 number in it.
      //loop created to run 0-9 to test hasNumber
      var hasnumber = false
      for (let i = 0; i < 10; i++) {
        if (password.includes(i)) {
          hasnumber = true
        }
      } //if statement, if it doesnt have # returns error, if it does it shows acceptable
      if (!hasnumber) {
        console.log('password needs at least one number')
        error = true
      }
      if (!error) {
        console.log('Username and Password acceptable');
      }
      return error
    } //close checkreg
  }; //close object
} //close function

//TESTS
//Test 1: Username less than 6 chars, password OK
var test = registration('Billy', 'elo$#');
console.log(test);
test.checkReg();
//test 2: username ok, pass under 6 chars
var test2 = registration('Amanda', '12345')
console.log(test2);
test2.checkReg();
//test 3:pass doesn't have special char
var test3 = registration("Michael", 'abc1234')
console.log(test3);
test3.checkReg();
//test 4: username has special char
var test4 = registration('#uperman', 'manofsteel!')
console.log(test4);
test4.checkReg();
//test 5: pass is PASSWORD
var test5 = registration('notverysecurityconcious', 'PASSWORD')
console.log(test5);
test5.checkReg();
//test 6: pass is password (case test)
var test6 = registration('notverysecure2', 'PaSsWoRd')
console.log(test6);
test6.checkReg();
//test 7: ussername and pass are correct
var test7 = registration('thisshould', 'work12$')
console.log(test7);
test7.checkReg();

// //Then write a main method that:
// First lets user input both User ID and Password
// Create methods to evaluate User ID/Pass
// Output whether the combination is acceptable or not
//
//
//
//
//
// Run Program/Test for all criteria

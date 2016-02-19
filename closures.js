//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
  var inner = outer;

//Once you do that, invoke inner.

  //Code Here
inner;


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var callJake = callFriend();
callJake("435-215-9248");


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
function makeCounter() {
  var num = 0;
  return function() {
    ++num;
    return num;
  }
}

  var count = makeCounter();
  count(); 
  count(); 
  count(); 
  count(); 



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts the first function as it's first parameter. The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
*/

  //Code Here
  //The first part works
function codeLove() {
  var whatDoILove = "I love code";
  return whatDoILove;
}

function codeFriend(func) {
  var flag = true;
  return function(){
    if(flag) {
      flag = false;
      return func();
    } else {
      return null;
    }
  }
  
} 

var codeEcho = codeFriend(codeLove);
codeEcho();

//Next Problem


/*
  Similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter, 'func', will be a function and the second parameter, 'N', will be a number. Now, in 'fnCounter', return an anonymous function that allows the parameter function to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

  //Code Here
  
var nTimes = function(func, limit) {
  var timesCalled = 0;
  return function() {
    if(timesCalled <= limit) {
      timesCalled++
      return func();
    } else {
      return "STOP";
    }
  }
}

var threeTimes = nTimes(codeLove, 3);
//Next Problem



  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

/*
  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the function is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

    //Code Here

  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(num){
          console.log(num);
      }, i*1000, i );
    }
  };

//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
var returnNum = function(){
  
}

var makefuns = function(){
  var funcArray = [];
  for(var i = 0; i < 5; i++){
    funcArray.push(function() {
    }
    return funcArray;
  }

}

arr = makeFuns();

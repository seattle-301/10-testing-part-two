/* Welcome back to our testing exercise! This practice module
    will allow you to become even more familiar with testing
    concepts. We test to check the I/O of our apps. That is - we are not
    checking for HOW something works, but rather the end RESULT and
    state of a particular place in our application.
*/


function assert(expression, successMessage, failureMessage) {
  var currentTest = assert.caller.name;
  if (expression) {
    return console.log('\n' + currentTest +
      ' test passing:', successMessage
    );
  }
  console.log('\n' + currentTest +
      ' test failing:', failureMessage
    );
}

  // BEGIN WORK BELOW - test code by running `node bonus-testing-part-two.js`
  //  in your terminal!

  /* ===================================================================
  ---------------------- Part Two! Hungry Lion ----------------------------
  ======================================================================
   As long as the lion is well-fed, he doesn't care too much of the
   humans that pass through. Unfortunately, the new caretaker is a little
   absent-minded.

   The lion needs 4 meals per day on average to stay happy. You're going to
   figure out how many days it took before the lion decided to supplement his
   diet with the caretaker.
  */

  // number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;

function isNumber() {
  assert(
    typeof(tooHungryDay) === 'number',
    'The lion appears to be too hungry after ' + tooHungryDay + ' days...',
    'tooHungryDay should be a number but instead is a data type of ' + typeof(tooHungryDay)
  );
};

/* TODO:
   Write a second test asserting that tooHungryDay falls within an acceptable answer
   based on the number of days available in the array. */

function positiveNum() {
  assert(
    tooHungryDay > 0,
    'tooHungryDay is a positive number.',
    'tooHungryDay should be a positive number but is instead "' + typeof(tooHungryDay) + '".'
  );
}

function isInt() {
  assert(
    tooHungryDay % 1 === 0,
    'tooHungryDay is a valid integer.',
    'tooHungryDay should be an integer but is instead "' + tooHungryDay % 1 + '".'
  );
}

function withinBounds() {
  assert(
    tooHungryDay <= mealsPerDay.length,
    'tooHungryDay is within our array\'s range',
    'tooHungryDay should be within 1 and ' + mealsPerDay.length + ' but is instead "' + tooHungryDay + '".'
  );
}

/*
 TODO:
 Cycle through the days in mealsPerDay. At each day, determine the average
 number of meals the lion got since the new caretaker started. Once the avg
 dips below 4, tooHungryDay should receive the day the lion chose a protein
 supplement.
*/

mealsPerDay.reduce(function(acc, num, idx, arr) {
  acc += num;
  var avg = (acc / (idx+1));
  if (avg < 4 && !tooHungryDay) tooHungryDay = idx + 1;
  console.log ('day ' + (idx+1) + ':' , avg);
  return acc;
}, 0);

positiveNum();
isInt();
withinBounds();

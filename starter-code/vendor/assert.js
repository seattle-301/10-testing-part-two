module.exports =
function assert(expression, successMessage, failureMessage) {
  if(!arguments[2]) return console.error('Error: not enough arguments! \n Remember to pass in an expression, a success message string, and a failing message string');
  var green = '  \x1b[32m(passing):\x1b[m',
      red = '  \x1b[31m(failing):\x1b[0m',
      test = '\x1b[35m' + assert.caller.name + '\x1b[m';
  if (expression) {
    return console.log(test,'\n', green, successMessage);
  }
  console.log(test, '\n', red, failureMessage);
};

new Error().stack;
var vm       = require("vm");
var total    = 1000000;
var result   = null;

console.log("STARTING");
process.nextTick(function run() {

  var script = vm.createScript('setInterval(function() {}, 0);', 'iamleaking.js');
  var sandbox = {
    setInterval: setInterval,
    foo: {
      leak: "hello leaky world"
    }
  };

  script.runInNewContext(sandbox);

  total--;
  if (total) {
    // process.nextTick(run);
      setTimeout(function() {
    	  var foo = {"bar": "hello world"};
    	  run();
      }, 1000);
  } else {
    console.log("COMPLETE");
  }
});

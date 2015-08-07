var restify = require('restify');
var bunyan = require('bunyan');

function fib(num) {
  var last1, last2, tmp, t;
  last1 = last2 = 1;

  for (i = 1; i < num; i++) {
    tmp = last1;
    last1 = last2;
    last2 = last1 + tmp;
  }

  return (last2);
};

function main() {
  var log, server;

  log = new bunyan({
    'name': 'utrechtjs',
    'level': 'info'
  });

  server = restify.createServer({
    'name': 'utrechtjs',
    'log': log
  });

  server.recentRequests = [];

  /*Waste some time simulating a real auth middleware*/
  server.use(function auth(req, res, next) {
    setTimeout(function() { next(); }, 30);
  });

  /*Let's spin some CPU*/
  server.use(function spin(req, res, next) {
    var i = 0;
    for (i; i < 300000; i++) {
      continue;
    }
    setImmediate(next);
  });

  server.get('/:n', function compute(req, res, next) {
    var num, value;
    num = parseInt(req.params.n);
    if(isNaN(num)) {
      return (next(
          new restify.ConflictError('"n" must be a number')));
    }

    value = fib(num);
    setImmediate(function computeDone() {
      res.send(value + '\n');
      next();

      /* keep track of the 10 most recently completed requests */
      server.recentRequests.push({
        'request': req,
        'response': res
      });

      if (server.recentRequests.length > 10) {
        server.recentRequests.shift();
      }

      server.log.debug('request handled');
    })
  });

  server.listen(21014, function() {
    server.log.info({ 'url': server.url }, 'listening');
  });
};

main();

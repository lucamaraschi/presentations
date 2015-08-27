var Virgilio = require('virgilio');
var virgilio = new Virgilio();
virgilio.loadModule$(require('virgilio-http'));

virgilio.http.use$(virgilio.http.bodyParser());
virgilio.http.use$(virgilio.http.queryParser());

var demo = virgilio.namespace$('demo');
demo.defineAction$('runner', function(numberOfIterations){
    var num1, num2, tmp;
    num1 = num2 = 1;

    while(--numberOfIterations) {
        tmp = num1;
        num1 = num2;
        num2 = num1 + tmp;
    }

    return num2;
});

virgilio.http.get('/demo/run/forrest/:startnumber')
    .addHandler(function(req, res, next) {
        setTimeout(function() { next();  }, 500);
    })
    .addHandler(function(req, res){
        var virgilio = this;
        return virgilio.demo.runner(parseInt(req.params.startnumber))
        .then(function(result) {
                res.contentType= 'text/plain';
                res.send(200, 'Your number is ' + result);
        });
});


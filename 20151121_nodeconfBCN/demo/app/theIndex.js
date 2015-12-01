var Virgilio = require('virgilio');
var virgilio = new Virgilio({
    logger: {
        level: 'error'
    }
});
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

virgilio.http.get('/leak')
        .addHandler(function(req, res, next) {
                var virgilio = this;
                function leak() {
                                this.leak= 'leak';
                };

                var loopy = 1000000;
                while(loopy--) {
                        virgilio.log$.info('Leaks to go ', loopy--);
                        var foo = new leak();
                }

                res.send(200, 'LEAKED');
});

virgilio.http.get('/demo/run/forrest/:startnumber')
    .addHandler(function(req, res, next) {
        setTimeout(function() { next();  }, 500);
    })
    .addHandler(function(req, res){

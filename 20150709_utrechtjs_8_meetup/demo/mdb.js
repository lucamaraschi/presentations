new Error().stack;

function main(arg) { func1(); }
function func1() { func2(); }

function func2()
{
        (function () {
                for (;;)
                        ;
        })();
}

main({ 'hello': 'world' });

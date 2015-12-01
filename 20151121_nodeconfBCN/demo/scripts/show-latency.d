#!/usr/sbin/dtrace -s
#pragma D option quiet
#pragma D option aggpack
#pragma D option aggsortkey

restify*:::route-start
{
   track[arg2] = timestamp;
}

restify*:::handler-start
/track[arg3]/
{
   h[arg3, copyinstr(arg2)] = timestamp;
}

restify*:::handler-done
/track[arg3] && h[arg3, copyinstr(arg2)]/
{
   @handlers[copyinstr(arg1),copyinstr(arg2)] = 
     lquantize((timestamp - h[arg3, copyinstr(arg2)]) / 1000000, 0, 25, 1);
   h[arg3, copyinstr(arg2)] = 0;
}

restify*:::route-done
/track[arg2]/
{
   @routes[copyinstr(arg1)] = 
     lquantize((timestamp - track[arg2]) / 1000000, 0, 25, 1);
   track[arg2] = 0;
}

END
{
	printf("ROUTE LATENCY (milliseconds)");
	printa(@routes);
	printf("\nHANDLER LATENCY (milliseconds)\n");
	printa(@handlers);
}

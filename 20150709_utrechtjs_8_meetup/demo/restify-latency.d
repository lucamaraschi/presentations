#!/usr/sbin/dtrace -s

BEGIN
{
  printf("tracing...CTRL-C to stop and print the results \n");
  printf("ALL times are expressed in milliseconds");
}

restify*:::handler-start
{
  tracker[pid, arg3, copyinstr(arg2)] = timestamp;
}

restify*:::handler-done
/tracker[pid, arg3, copyinstr(arg2)]/
{
  this->name = copyinstr(arg2);
  this->usec = (timestamp - tracker[pid, arg3, this -> name]) / 1000;
  @[this->name] = lquantize(this->usec, 0, 1000000, 1000);
  tracker[pid, arg3, this->name] = 0;
}

END
{
}

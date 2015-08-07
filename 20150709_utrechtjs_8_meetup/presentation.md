# [fit]The magic :shit:
## [fit]when your node app miserably crashes!

---

# Who am I?
## [fit]
## [fit]
## [fit]
## @lucamaraschi
- Architect @ IceMobile during the day
- *Node.js*  and *SmartOS* Italian lover (during the night!)
- International speaker

---

# [fit]Basically...
# [fit]I inspect your dumps!

---

# [fit]Disclaimer
# [fit]I am NOT a Joyent employee

---

# [fit]But sorry...

---

# [fit]This magic only
# [fit]works on SmartOS!

---

# [fit]WHY?

---

# [fit]Let's check the node core source...

---

# [fit]Once upon a time...

---

# [fit]but first...

---

# [fit]your app/service
# [fit]is going to crash!

---

# [fit]DON'T even think
# [fit]it's BUG FREE!

---

# [fit]3AM and PagerDuty
# [fit]tells you
# [fit]PRODUCTION DOWN!

---

# [fit]:shit:

---

# [fit]What the hell is going on?

---

# [fit]Usual suspects

- Pathological performance
- Wrong behavior
- Memory problems (leaks, excessive usage)

---

# [fit]Where shall I start from?

---

# [fit]If you say
# [fit]console.log()

---

# [fit]Change job!

---

# [fit]Each lap is expensive
# [fit]Each lap is disruptive
# [fit]Production problems are often hard to reproduce
# [fit]Worse, restarts often make the original problem go away

---

# [fit]Dtrace

---

![](./images/luca-dtrace-fathers.jpg)

---

# [fit]Node.js probes

---

# [fit]Restify includes dtrace support
# [fit]as first class thing

---

# [fit]Now you know
# [fit]why you MUST use restify!

---

# [fit]But also bunyan
# [fit]has some interesting dtrace in...

---

# [fit]Imagine...
# [fit]to change the log level LIVE

---

# [fit]state of the app
# [fit]does not change!

---

# [fit]Another reason
# [fit]to use restify!

---

# [fit]dtrace
## or die!
#### don't complain to me...I told you!

---

# [fit]Runtime debugging
## on CPU or off CPU

---

# [fit]On CPU

---

# [fit]running js code or doing GC

---

# [fit]classical approach is to profile
# [fit]Oh yeah...dtrace

---

# [fit]Have you already
# [fit]taken your DUMP?

---

# [fit]gcore
# [fit]only on Solaris like OSs

---

# [fit]Don't be a bad boy...

---

# [fit]--abort-on-uncaught-exception

---

# [fit]Then I can put
# [fit]my hands into your dump!

---

# [fit]mdb
MDB is the illumos modular debugger, used to debug the live kernel, kernel crash dumps, processes, and process core dumps

---

# [fit]So...

---

# Resources

- [mdb and node.js](https://www.joyent.com/blog/mdb-and-node-js)
- [nshttpsnoop](https://github.com/joyent/nhttpsnoop)
- [wrk](https://github.com/wg/wrk)

---

# show all probes running in the current OS
dtrace -l

# Show all the node.js dtrace probes => http requests start and done
dtrace -l -n 'node*:::'

# Enables and shows all the http probes in node.js
sudo nhttpsnoop -gl

# Run the custom dtrace for restify to track the usage distribution of the handlers
sudo ./demo/restify-latency.d

# Enable bunyan logging live via dtrace (no restart needed)
bunyan -p [:pid]

# Let's rock with the flamegraph
./profile.sh

##### MDB #####

# Get a dump!
gcore [:pid]

# Load it into MDB
mdb core.[:pid]

# load v8
::load v8.so

# combined c and js stack trace
::jsstack

# stack with parameters but withour source code
::jsstack -vn0

# check for the send function and response object
[addr]::jsprint -a

# analyze all the objects in the core file and return all the properties
# very heavy in production but you can run it on the core file!
::findjsobjects

# For memory leak you can find really a huge number
# Get the HTTP requests
[addr]::findjsobjects | ::jsprint method | sort | uniq -c

#Objects are ok....but closures...
# routeAndRun function of restify
[addr]::jssource

# Every time that we call the handler we hold a reference to req and res called in a routeAndRun closure

# get and object with a specific name
::findjsobjects -p {objectname}

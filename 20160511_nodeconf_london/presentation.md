# [fit] **SWIMming**
# [fit] in the microservices Ocean

—

# [fit] **@lucamaraschi**
# [fit] nodejs/post-mortem

—

# [fit]The magic dump :shit:

—

# [fit] Porting mdb to linux
# [fit] Common heap dump format

—

# **Disclaimer!**
## It’s just my opinion!
## I don’t work for UBER

—

# [fit] I have a dream
# [fit] Autonomous **cluster**
# [fit] **with no configuration**

—

# [fit] flow driven development

—

# [fit] once upon a time…

—

![](./images/monolith_dark.jpg)

—

# [fit] and then **JAVA** came across…
# [fit] with the FAMOUS monolith

—

![](./images/java_monolith.jpg)

—

![](./images/oracle.jpg)

—

# [fit] “Divide et impera”

—

# [fit] then **MICROSERVICES**

—

![](./images/hipster_microservices.jpeg)

—

![](./images/cian.png)

—

# [fit] Success
# [fit] === more users

—

# [fit] more users
# [fit] === more compute power

—

# [fit] more “racks”
# [fit] === more distribution

—

![](./images/aws.gif)

—

# [fit] **Elasticity**

—

# [fit] AWS => **ELB**

—

# [fit] **docker…**
# [fit] does not solve the problem!

—

# [fit] more “containers”
# [fit] === service discovery

—

# [fit] NO **Resiliency**
# [fit] NO **Fault tolerance**

—

![](./images/microservices_deployment.png)

—

# [fit] Failures
# [fit] are detected by heartbeats 

—

# [fit] welcome in 
# [fit] **devOps hell!**

—

# [fit] Problem
# [fit] **state** of the cluster
# [fit] **might change** all the time

—

# [fit] Ehm…

—

# [fit] till…

—

![fit](./images/swim.png)

—

# [fit] **S**calable
# [fit] **W**eakly consistent
# [fit] **I**nfection style
# [fit] **M**embership protocol

—

# [fit] **Weakly consistent**
### vs. Strongly consistent

—

# [fit] **Failure detection**
### over the cluster

—

# [fit] **Information dissemination**

—

# [fit] Equally **distribution**
### of the workload

—

# [fit] Designed for
# [fit] **Distributed Systems**

—

![](./images/magic.gif)

—

# [fit] Add a node to the cluster

—

# [fit] How to re**balance** the **topology**?

—

# [fit] **Consistent Hashring**

—

![fit](./images/hashring.png)

—

# [fit] WHY?
# [fit] WHAT?

—

# [fit] Partitioning

—

# [fit] **Predictable**
# [fit] Elasticity

—

# [fit] REPLICATION

—

# [fit] DISTRIBUTE STATE

—

# [fit] Edges are
# [fit] **NOT** stateless

—

![fit](./images/serf.png)

—

![fit](./images/upring.png)

—

![fit](./images/ringpop.png)

—

# [fit] Application-level
# [fit] **Sharding**

—

# [fit] **DISTRIBUTION**
# [fit] in an eventual consistent universe

—

![fit](./images/application-level-sharding.png)

—

![fit](./images/hyperbahn.png)

—

> Hyperbahn enables service discovery and routing for large-scale systems comprised of many microservices. Distributed, fault tolerant, and highly available, it lets one service find and communicate with others simply and reliably without having to know where those services run.

— Uber’s Documentation!

—

![fit](./images/http-is-dead.png)

—

# [fit] **HTTP**
# [fit] and the latency

—

# [fit] Don’t use it!
### for in-network communication!

—

![fit](./images/tchannel.png)

—

> TChannel is a networking framing protocol used for general RPC, supporting out-of-order responses at extremely high performance where intermediaries can make a forwarding decision quickly

— @Matt Sweeney

—

# [fit] WHY **RPC**?

—

# [fit] ARE **FUNCTIONS**!
# [fit] running on a cluster!

—

# [fit] AWS LAMBDA

—

### kills the
# [fit] **~~Development workflow~~**

—

# [fit] Abstract the development
# [fit] **distribution complexity**

—

# [fit] “Serverless”
## is the new hipster!

—

# [fit] “Functional”
## is the new hipster!

—

# [fit] “distributed functions”
## are the future ;-)

—

# [fit] Grazie!













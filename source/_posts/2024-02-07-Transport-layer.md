---
title: Transport layer
date: 2024-02-07 10:55:06
tags:
---

# 3c internectworking

## Service model
no guarantees

## IP packet header

## Fragmentation
Examples with detail


## Addressing
### IP Address properties
### 4 class
### Subnets/CIDR

## packet forwarding
### IP forward algorithm
### Routin tables

## Address translation
## ARP Adression Resolution Protocol

## Node autoconfiguration
### DHCP
dynamic host configuration ptcl


## Error Reporting
### ICMP Internet Control messsage protocol
### MTU Discovery

# 3d Routing
## Forwarding(One path) vs Routing(Mutiple path)
## Distance Vector protocol: Bellman_ford
## Link-state protocol
each router teel all the otehr routers about its link
## Reliable flooding (LSP)
link metrics
## Interdomain routing - definition
### BGP
### ASs
BGP between ASs: compute gglobal policy-compliant routers
OSPF in an AS: compute shortest routes between routers


# 4a Transport
## Recap
Intra-domain protocols
- Lowest cost shortest protocol/ disseminate full information about the topology
- Distance vector protocol(RIPv2)
- link state pctl: OSPF

Inter-domainprotocol (BGP)
- most preffeered policy-compliant route
- information hiding for scalability and secrecy

## UDP 
well known ports
choosing ports

## TCP
### byte stram abstraction
segment format
### three handshake
### flow controlslly window synfrome
### Nagels' algorithm




# 4b RPC- RTP
## RPC Remote procedure call
gRPC: stubs, request and responses
Acknowledge models
Syn, Asyn ptcls
Message and encoding
### Data transmission in real time
Read- time data transmission (RTP)
Stram transmission ptcl



# 4c src and congestion 
## Traffic flows
Taxonomy of congestion flow
RED
## Congestion control
## 

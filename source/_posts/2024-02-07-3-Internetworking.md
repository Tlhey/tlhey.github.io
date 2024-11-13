---
title: 3 - Internetworking
date: 2024-02-07 09:14:34
tags:
---

Internetwoking: To build global newtworks. 

Three main tasks of interconnecting networks.
- same type: Switches (Bridges)
- diff types: IP, routers
- Computin between nodes: Routing protocols 


# 3.1 - Switching basics

## Switch
### Def 
> A switch is a multi-input, multi-output device that transfers packets from an input to one or more outputs.". Network switches interconnect links of the same type
### Property
- Interconnect switch **(Scalable)**
- connect switches to each other and to hosts using point-to-point links
- Providing high aggregate throughput
> Adding a new host to the network by connecting it to a switch does not necessarily reduce the performance of the network for other hosts already connected.
### Job
**Swithching** or **Forwarding** Accoding to **OSI(Open System Interconnceting)**
>A switch’s primary job is to receive incoming packets on one of its links and to transmit them on some other link.

## Swithcing
### Assumption
1. A way to identify the end nodes: **Address**, which is **gloablly unique**. e.g. MAC address in Esthernet, which is burned in the chip and is globally unique.
2. There are ways to identify the input and output port for each switch by numbering them.
### Datagram
To decide how to forward a packet, a switch consults a forwarding table (sometimes called a routing table)
| Destination | Port |
| ----------- | ----------- |
|A|1|
|B|2|
|...|...|
### Tyoes
Forwading types
- Frame/packet forwarding 
- Circuit frowarding 
- Source forwarding

## Frame forwading
Which is called Datagram networks. (without connections)

## Circult forwarding
### VC Table
VCI: virtual circuit identifier 
| Input port | Input VCI | Out port | Out CVI|
| ----------- | ----------- | ----------- | ----------- | 
|1|1|2|2|
|...|...|...|...|
- The VCI can be reused: VCI is not a globally significant identifier for the connection.

### Eastablish a VC Tbale
>Signaling: A host can send messages into the network to cause the state to be established. This is referred to as signalling, and the resulting virtual circuits are said to **be switched**.
### Notes!
- At least one round-trip time (RTT) of delay before data is sent to build the VC.
- (?)Connection request contains the full address for host B, each data packet contains only a small identifier, which is only unique on one link. Thus, the per-packet overhead caused by the header is reduced relative to the datagram model. More importantly, the lookup is fast because the virtual circuit number can be treated as an index into a table rather than as a key that has to be looked up.

## Comparsion btween Frame-base/ Circult-based forwarding
![Alt text](3-Internetworking/image.png)

## Source-based routing
Path defined by the source and encoded in frame


# 3.2 Switched Ethernet
## Bridges
## Spanning tree algorithm 
## Broadcast 
## VLAN




# 3.3 Internet(IP)

## Service model 






# Recap
## link & Phys
- 5
## netowork
- switches
- IP
- routing
## Transport
- demultiplexing , port-number

##

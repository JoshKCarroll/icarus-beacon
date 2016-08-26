#!/bin/bash
cd /home/pi/proj/simple-demo
gpsfake -c 5 gpsfake.log &
./run.sh &
iceweasel index.html &

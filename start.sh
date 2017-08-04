#!/bin/bash
cd /home/pi/JoshKCarroll/icarus-beacon
gpsfake -c 5 gpsfake.log &
./run.sh &
iceweasel index.html &

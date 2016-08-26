#!/bin/bash
sleep 5
while :
do
    python gps_poller.py
#    pkill iceweasel
#    iceweasel index.html
    xdotool key ctrl+shift+r
    sleep 15
done

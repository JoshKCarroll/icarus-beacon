#!/bin/bash
sleep 5
while :
do
    python gps_poller.py
    xdotool key ctrl+shift+r
    sleep 60
done

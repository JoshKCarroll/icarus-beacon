# ICARUS Beacon

A Raspberry Pi based project for visualizing the GPS location of the good ship ICARUS in Black Rock City.

It's sort of messy because I'm not a great Pi programmer and a much, much worse JavaScript programmer, but it ended up hacked together this way because reasons. Improvements VERY VERY welcome.

This project is based on [Tangram](http://github.com/tangrams/tangram) and, thus, [Leaflet.js](http://leafletjs.com)

### To run on a raspberry pi:

1. Download this repo, and install the included r_kiosk plugin for iceweasel (which should also be installed).

2. Copy start.sh to appropriate folder and configure it to cd to this repo. Command to fake gps coordinates is included by default for testing, but can be commented out for real usage.

3. When I'm ready to go, I like to add `./start.sh` to my .bashrc so I just have to launch a terminal to kick it off - typing on playa is hard and someone else might need to restart it.

4. There might be other stuff you have to install that I'm forgetting, like gpsd or gpsfake. You'll figure it out. Please add an issue when you do.

5. ???

6. Profit.

### Other notes

To kill the loop manually, do `ALT+F4`, then `CTRL+C`, then run `./kill.sh`.

If the map doesn't load appropriately on your screen size / resolution, you can tweak the lat long and zoom in the camera in `scene.yaml`.

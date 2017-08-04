import json
from gps import *

session = gps()
session.stream(WATCH_ENABLE)
for report in session:
    if report['class']!='TPV' or report['mode'] not in [2, 3]:
        continue
    icarus = open('icarus_base.json', 'r')
    point = json.load(icarus)
    icarus.close()
    point['features'][0]['geometry']['coordinates'] = [report['lon'], 
            report['lat']]
    icarus2 = open('icarus.json', 'w')
    json.dump(point, icarus2)
#    print point
    icarus2.close()
    break



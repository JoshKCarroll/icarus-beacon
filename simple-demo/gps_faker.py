import json

point = [-119.231, 40.783]

#lon, lat
lfile = open('gpsfake.log', 'w')
for i in range(0, 200):
    j = {'class':'TPV', 'mode':3}
    j['lon'] = point[0] + i*0.0003
    j['lat'] = point[1] + i*0.0003
    lfile.write(json.dumps(j) + '\n')
lfile.close()

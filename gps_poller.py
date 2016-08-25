from gps import *

session = gps()
session.stream(WATCH_ENABLE)
for report in session:
    print report

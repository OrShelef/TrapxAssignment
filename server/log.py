import sys 

import json

f = open("log.txt", "a")
f.write(sys.argv[1]+'\n')
f.close()
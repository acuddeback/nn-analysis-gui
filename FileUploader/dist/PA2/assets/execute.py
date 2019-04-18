#!/usr/bin/env python
import os
import subprocess
subprocess.call("rm -f src/assets/a.out", shell=True)
retcode = subprocess.call("src/assets/test.sh", shell=True)
print ("Score: " + str(retcode) + " out of 2 correct.")
print("*************Original submission*************")
with open('src/assets/uploads/add.py','r') as fs:
 print(fs.read())

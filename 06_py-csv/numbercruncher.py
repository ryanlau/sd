"""
TNPG: Pink Oranges, Ryan Lau, Ayman Habib

DISCO:

QCC:

OPS:

"""

import csv
import random
occu = {}
with open('occupations.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        occu[row[0]] = float(row[1])
var = random.choices(list(occu.keys()), list(occu.values()))
print(var)
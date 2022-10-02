# TNPG: Pink Oranges: Ryan Lau, Ayman Habib
# SoftDev
# K06 -- Processing data from CSV file
# 2022-10-02
# time spent: 1 hrs

"""
DISCO: 
    - We learned about csv.reader() which reads through and processes CSV files without having to do it manually
    - We learned about random.choices() which picks an item from a list using an associated list of values to assign weights

QCC:
    - Is there a way to not process the last line of the csv when using csv.reader()?

HOW THIS FILE WORKS: 
    - First, the program reads through the csv file, splitting the data by every new line
    - Then, a dictionary is created, and each of the lines are split by commas (','), with everything before the last comma in the line serving as the key, and the everything after the last comma serving as the value
    - A new list is made and depending on the value of the key, the key is added to the list proportionally to the value of the key times 10
    - Then, the program randomly selects an item from that list and prints it
"""

import csv
import random

occupations = {}

def populate_occupations_with_csv():
    with open('occupations.csv') as csvfile:
        reader = csv.reader(csvfile)
        rows = list(reader) # [['Job Class', 'Percentage'], ['Management', '6.1'], ...]
        rows = rows[1:-1] # remove first and last row

    for row in rows:
        occupations[row[0]] = float(row[1])

def pick_occupation_with_choices():
    occupation = random.choices(list(occupations.keys()), list(occupations.values()))
    return occupation[0] # random.choices() returns a list

def populate_occupations():
    with open('occupations.csv') as f:
        rows = f.read().split("\n") # ['job class,percentage', 'management,6.1', ...]
        rows = rows[1:-1] # remove first and last row

    for row in rows:
        values = row.split(',')
        occupation = ",".join(values[0:-1])
        weight = float(values[-1])
        occupations[occupation] = weight

def pick_occupation_with_choice():
    weighted_occupations = []
    for occupation in list(occupations.keys()):
        weight = int(occupations[occupation] * 10)
        for _ in range(weight):
            weighted_occupations.append(occupation)

    return random.choice(weighted_occupations)


populate_occupations_with_csv()
occupation = pick_occupation_with_choices()
print(occupation)

"""
populate_occupations()
occupation = pick_occupation_with_choice()
print(occupation)
"""

"""
TNPG: Pink Oranges, Ryan Lau, Ayman Habib

DISCO:
- We learned about .split and .read
- We implemented fstrings
    - When printing the pd number, fstrings automatically cast the int as a string

QCC:
- What is LI: (u + 4)%6 ?

OPS SUMMARY: Given a txt file with the period, name, and ducky name of every devo in Soft Dev, the program first establishes a dictionary with the period numbers as keys, and each key being empty. The program then iterates through the text input file, first separating each section of devo info with @@@, and then separating each piece of devo info with $$$. These pieces of info are then assigned to each key in the dictionary, depending on the period number. The program then uses .choice to randomly select a period, and then randomly selects a devo and its ducky from the selected period.
"""
import random

with open("krewes.txt") as f:
    text = f.read()

devosnducky = text.split("@@@")
krewes = {2:[], 7:[], 8:[]}
for x in devosnducky:
    devoinfo = x.split("$$$")
    pd = int(devoinfo[0])
    devo = devoinfo[1]
    ducky = devoinfo[2]
    krewes[pd].append(devo + " " + ducky)

pd_list = [2, 7, 8]
pd = random.choice(pd_list)
name = random.choice(krewes[pd])
print(f"{pd} {name}")


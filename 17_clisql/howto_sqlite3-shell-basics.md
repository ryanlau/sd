# how-to :: SQLite3
---
## Overview
SQL/SQLite3 allows to organize and retrieve data efficiently.

### Estimated Time Cost: 1.0 hrs

### Prerequisites:

- computer with sqlite3 installed

1. Open up a Terminal.
2. Start the sqlite3 shell by running `sqlite3 <DATABASE_NAME>`. If <DATABASE_NAME> does not exist in the folder, it will be created automatically.
3. Create a table by running `create table <TABLE_NAME> (<COLUMN_NAME> <DATATYPE>, <COLUMN_NAME> <DATATYPE>, ... );`.
4. Insert data into the table by running `insert into <TABLE_NAME> values(<COLUMN_1_VALUE>, <COLUMN_2_VALUE>, ...);`.
5. To view table data, run `select * from <TABLE_NAME>;`.
6. To view specific data, run `select * from <TABLE_NAME> where <COLUMN_NAME><CONDITION>;`.
7. To delete any unwanted row, run `delete from <TABLE_NAME> where <COLUMN_NAME><CONDITION>;`.
8. To close the sqlite3 shell, run `.quit` or `ctrl + D` on the keyboard.


### Resources
* [mr. mykolyk's notes on sql/sqlite](https://github.com/stuy-softdev/notes-and-code/tree/main/smpl/k17-18sqlite)
* [sqlite3 cli docs](https://www.sqlite.org/cli.html)

---

Accurate as of (last update): 2022-10-24

#### Contributors:  
Ryan Lau, pd2  
Jonathan Song, pd2  
Hui Wang, pd2

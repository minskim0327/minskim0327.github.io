# Modeling

# Table of contents

1. [What is normalization?](#WhatIs)
2. [1NF](#1NF)
3. [2NF](#2NF)
4. [3NF](#3NF)

## What is normalization<a name="WhatIs"></a>
Database Normalization is the processing of structuring a database in accordance with a series of 
`normal forms` in order to reduce `data redundancy` and improve `data integrity`.

## 1NF<a name="1NF"></a>
A relation is 1st normal form iff domain of each column contains only `atomic` values.

Below is the `user` table that does not satisfy normal form.

```
 +-------------+--------------+----------------------------+
 |                          user                           |
 +-------------+--------------+----------------------------+
 | id          | name         | email                      |
 +-------------+--------------+----------------------------+
 | 1           | Min          | a@a.com, b@b.com           |
 | 2           | James        | c@c.com, d@d.com           |
 | 3           | Ray          | e@e.com                    |
 +-------------+--------------+----------------------------+
```

In this example, the `email` attribute is not atomic, and thus not satisfy 1NF.

The solution is to create an email table that references user.id as foreign key.

Thereafter, the `user` and `email` table will look like the following.

```
 +-------------+--------------+
 |           user             |
 +-------------+--------------+
 | id          | name         | 
 +-------------+--------------+
 | 1           | Min          |
 | 2           | James        |
 | 3           | Ray          |
 +-------------+--------------+
```

```
 +-------------+--------------+------------+
 |                  email                  |
 +-------------+--------------+------------+
 | id          | email        | user_id    |
 +-------------+--------------+------------+
 | 1           | a@a.com      | 1          |
 | 2           | b@b.com      | 1          |
 | 3           | c@c.com      | 2          |
 | 4           | d@d.com      | 2          |
 | 5           | e@e.com      | 3          |
 +-------------+--------------+------------+
```

The tables above now satisfy 1NF.

## 2NF<a name="2NF"></a>
A relation is 2nd normal form if it satisfies the following:

- It is 1NF.
- It `non-prime` attribute of the relation is dependent on the whole of every candidate key. `non-prime`
attribute is an attribute that is not part of any candidate key of the relation. Simply put,
 all the non-key columns are dependent on the table's primary key.

Consider the following example, referenced from this [link](#https://www.geeksforgeeks.org/second-normal-form-2nf/)

Let there be a student table.

```
 +-------------+--------------+--------------+
 |                 student                   |
 +-------------+--------------+--------------+
 | id          | course_id    | course_fee   |
 +-------------+--------------+--------------+
 | 1           | 110          | 1000         |
 | 2           | 120          | 1400         |
 | 3           | 240          | 2000         |
 +-------------+--------------+--------------+
```


In this example, `candidate key` is {id, course_id}, and `course_fee` is the `non-prime` attribute.
However, `course_fee` is only dependent on `course_id`, and thus it is `partially dependent` on the candidate key. <br />
This does not satisfy 2NF.

To convert the above relation to 2NF, the tables must be split into student table and the course table.

```
 +-------------+--------------+
 |           student          |
 +-------------+--------------+
 | id          | course_id    |
 +-------------+--------------+
 | 1           | 110          |
 | 2           | 120          |
 | 3           | 240          |
 +-------------+--------------+
```

```
 +-------------+--------------+
 |           course           |
 +-------------+--------------+
 | id          | course_fee   |
 +-------------+--------------+
 | 110         | 1100         |
 | 120         | 1400         |
 | 240         | 2000         |
 +-------------+--------------+
```

<b>2NF tries to reduce redundant data getting stored in memory.</b><br /> 
For instance, if there were 100 students taking course
110, we don't need to store its fee as 1100 for all 100 record. Instead we have it stored at the course table just once.

## 3NF<a name="3NF"></a>

A relation is 3nd normal form if it satisfies the following:

- It is 2NF.
- It does not have transitive dependency for non-prime attributes.

Let there be a student table, which holds ratings for restaurants.

```
 +-------------+--------------+--------------|------+
 |                      student                     |
 +-------------+--------------+--------------|------+
 | id          | zipcode      | state        | city |
 +-------------+--------------+--------------|------+
 | 1           | 11000        | PA           | A    |
 | 2           | 22000        | NY           | B    |
 | 3           | 33000        | WA           | C    |
 +-------------+--------------+--------------|------+
```


In this example, the table satisfies 2NF. In the table above, `id` is the candidate key.
For non-prime attributes, there exists transitive dependency.<br />

`state` and `city` is dependent on `zipcode`, and `zipcode` is dependent on `id`, the candidate key.

Thus, there is transitive dependency for non-prime attributes. <br />

To convert the above relation to 3NF, the tables must be split into student and student_zip table.

```
 +-------------+--------------+
 |           student          |
 +-------------+--------------+
 | id          | zipcode      |
 +-------------+--------------+
 | 1           | 11000        |
 | 2           | 22000        |
 | 3           | 33000        |
 +-------------+--------------+
```

```
 +-------------+--------------+------|
 |           student_zip             |
 +-------------+--------------+------|
 | zip         | state        | city |
 +-------------+--------------+------|
 | 11000       | PA           | A    |
 | 12000       | NY           | B    |
 | 24000       | WA           | C    |
 +-------------+--------------+------|
```

3NF is considered `adequete` for normal relational database design because 3NF tables are free of insertion,
update, and deletion anomalies. Also, it <b>always ensures functional dependency preserving and lossless</b>.
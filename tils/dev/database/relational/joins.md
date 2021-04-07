# Joins

# Table of Contents

1. [What is join?](#What)
2. [Inner Join](#Inner)
3. [Outer Join](#Outer)
    1. [Left & Right Outer Join](#LeftRight)
    2. [Full Outer Join](#Full)
4. [Self Join](#Self)

## What is Join<a name="What" />

`Join` is used to combine and retrieve data from two or more tables.
Below are the ben-diagrams of 4 types of joins that are discussed in this reading.

![joins](../../../../assets/images/sql-joins.png)
## Inner Join<a name="Inner" />

`Inner Join` creates a new table (not physical) by combining rows that have matching values in two or more tables. It is the `common section` between two or more tables.

Suppose there is a customer table and cart table.

```
 +-------------+--------------+------------+
 |                  customer               |
 +-------------+--------------+------------+
 | id          | name         | membership |
 +-------------+--------------+------------+
 | 1           | Gerrard      | Gold       |
 | 2           | Rooney       | Gold       |
 | 3           | Lampard      | Platinum   |
 +-------------+--------------+------------+
```

```
 +-------------+--------------+-------|
 |                  cart              |
 +-------------+--------------+-------|
 | cart_id     | customer_id  | price |
 +-------------+--------------+-------|
 | 10000       | 1            | 60    |
 | 20000       | 1            | 70    |
 | 30000       | 3            | 80    |
 +-------------+--------------+-------|
```

The inner join on two tables is possible due to existence of common field. The following query is an example of inner join.

```
SELECT name, membership, price
FROM customer
  INNER JOIN cart
  ON customer.id = cart.customer_id
```

This query will create a new table like the following.

```
 +-------------+--------------+------------+
 |               customer_cart             |
 +-------------+--------------+------------+
 | name        | membership   | price      |
 +-------------+--------------+------------+
 | Gerrard     | Gold         | 60         |
 | Gerrard     | Gold         | 70         |
 | Lampard     | Platinum     | 80         | 
 +-------------+--------------+------------+
```

Inner Joins of more than 2 tables is just repetitive repetition of joining 2 tables.


## Outer Join<a name="Outer" />

### Left & Right Outer Join <a name="LeftRight" />

Right Join is basically the same as left join.
The convention is to use Left outer join.

```
SELECT [attribute], [attribute], [attribute]
FROM [left table]
  LEFT JOIN cart
  ON [Join condition]
```

Sometimes, Left Join is identical to Inner Join. <b>Why?</b> Think in terms of the shape of Ben Diagram. What if the left circle was included as sub-section of the right circle? Then, the resulting shape of inner join and left-outer join is identical. <br />

This is when the Join condition is upon the `NOT NULL` columns of the left table. In that case, every row in the attribute of the join condition in the left table must have corresponding row in the right table. Thus, in terms of Ben Diagram, left circle could be considered as subgraph of the right circle.

### Full Join <a name="Full" />

Full join is nothing more than joining of all rows of both tables. Simple!

## Self Join<a name="Self" />

As the name suggests, it is simply joining the table's self. Instances of such self join could be useful when a row of the table has attribute that refer's the other row in the same table. This is done by creating an `alias` of the table. <br />

Let there be a user table.

```
 +-------------+--------------+-----------|--------------+
 |                            user                       |
 +-------------+--------------+-----------|--------------+
 | id          | name         | email     | referred_by  | 
 +-------------+--------------+-----------|--------------+
 | 1           | Min          | a@a.com   | b@b.com      |
 | 2           | James        | b@b.com   | b@b.com      |
 | 3           | Ray          | c@c.com   | d@d.com      |
 | 4           | Nick         | d@d.com   | NULL         |
 +-------------+--------------+-----------|--------------+
 ```

```
SELECT v1.name AS name, v1.email AS email, v2.email AS referred_by
FROM user AS v1
  JOIN user AS v2
  ON v1.referred_by = v2.email
```

In the query above, `v1` and `v2` are the `alias` for the user table. The following query will result in a joined table like the following.

```
 +----------+-----------+--------------+ 
 |             self_join               |
 +----------+-----------+--------------+
 | name     | email     | referred_by  | 
 +----------+-----------+--------------|
 | Min      | a@a.com   | b@b.com      |
 | James    | b@b.com   | b@b.com      |
 | Ray      | c@c.com   | d@d.com      |
 +----------+-----------+--------------+ 
 ```
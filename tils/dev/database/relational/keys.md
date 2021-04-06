# Keys

# Table of contents

1. [Common Properties](#CommonProperties)
2. [Lookup Table](#LookUpTable)
3. [Super Key vs Candiate Key](#SuperCandidate)
4. [Primary Key vs Alternate Key](#PrimaryAlternate)
5. [Surrogate Key vs Natural Key](#SurrogateNatural)
6. [Foriegn Key](#Foriegn)
    1. [Foriegn Key Constraints](#ForiegnConstraint)
7. [Composite vs Compound Key](#CompositeCompound)

## Common Properties.<a name="CommonProperties"></a>

Keys are <b>unique</b>, <b>immutable</b>, <b>never null</b>.

## Lookup Table <a name="LookUpTable" />

Let there be a LOL(League of legends, owned by Riot Games) `user` table as below.

```
 +-------------+--------------+----------------------------+
 |                          user                           |
 +-------------+--------------+----------------------------+
 | id          | name         | rank                       |
 +-------------+--------------+----------------------------+
 | 1           | Min          | Grand Master               |
 | 2           | James        | Silver                     |
 | 3           | Ray          | Diamond                    |
 | 4           | Nick         | Iron                       |
 | 5           | Arthur       | Gold                       |
 | 6           | John         | Silver                     |
 +-------------+--------------+----------------------------+
```

Now suppose that Riot changes the rank `Silver` to `Skelter`, for example.
This causes a problem with the table maintenence. All the rows with silver rank
have to be modified.

This problem is fixed by `Lookup Table`. <b>A lookup table is a master table which is static in nature that is used for reference purpose from other tables. </b> 

To illustrate, lets look at the following example.

Let there be a `ranking` table, where rows represent the rank.

```
 +-------------+--------------+
 |          ranking           |
 +-------------+--------------+
 | id          | rank         |
 +-------------+--------------+
 | 1           | Grand Master |
 | 2           | Diamond      |
 | 3           | Gold         |
 | 4           | Silver       |
 | 5           | Bronze       |
 | 6           | Iron         |
 +-------------+--------------+
```

With the following table given, user table can now be represented as following. 


```
 +-------------+--------------+----------------------------+
 |                          user                           |
 +-------------+--------------+----------------------------+
 | id          | name         | rank                       |
 +-------------+--------------+----------------------------+
 | 1           | Min          | 1                          |
 | 2           | James        | 4                          |
 | 3           | Ray          | 2                          |
 | 4           | Nick         | 6                          |
 | 5           | Arthur       | 3                          |
 | 6           | John         | 2                          |
 +-------------+--------------+----------------------------+
```

Now, when the Riot changes the rank value, the user table is not affected by the change. When the value changes from `Silver` to `Skelter`, only the `ranking` table is needed to be modified.

## Super vs Candidate Key<a name="SuperCandidate" />

A `Super Key` is any set of attributes(columns) that uniquely identify a tupe(row) in a table, whereas a `Candidate Key` is the least, minimal set of attritbues neccessary to identify a tuple.

From this, it is inferrable that `Candidate Keys` are selected from the set of `Super Keys`.

The following example, referrenced from [this link](https://beginnersbook.com/2015/04/super-key-in-dbms/), illustrates the concept.

Let there be an employee table.

```
 +-------------+--------------+----------------------------+
 |                        employee                         |
 +-------------+--------------+----------------------------+
 | ssn         | id           | name                       |
 +-------------+--------------+----------------------------+
 | 11345       | minskim      | Min                        |
 | 22345       | raylee       | Ray                        |
 | 33345       | jackWhite    | Jack                       |
 | 44345       | JohnAdam     | Min                        |
 +-------------+--------------+----------------------------+
```

The `Super Keys` are the following.

- {ssn}
- {id}
- {ssn, id}
- {ssn, name}
- {id, name}
- {ssn, id, name}

The `Candidate Keys` are the following.

- {ssn}
- {id}

## Primary vs Alternate Key<a name="PrimaryAlternate />

A `Primary Key` can be regarded as a combination of `Candiadate Keys`. Primary key is thus a specific
 choice of a minimal set of attributes (columns) that uniquely specify a tuple (row).

An `Alternate Key` is the rest of the `Candidate Keys` that were not selected as `Primary Key` in the table.

## Surrogate vs Natural Key<a name="SurrogateNatural" />

A `Surrogate Key` is a key which does not have anyu contextual or real-world meaning i.e. the value is only
meaningful in the database.

A `Natural Key` is a key that has contextual or real-world meaning, such as email, password, date, etc. 

## Foreign Key<a name="Foreign" />

A `Foriegn Key` is a key that is used to reference `Primary Keys`.

Let there be a class table.

```
 +-------------+----------+----------------------------+
 |                      class                          |
 +-------------+----------+----------------------------+
 | id      | building_id  | instructor_id              |
 +-------------+----------+----------------------------+
 | 1       | 12           | 123                        |
 | 2       | 24           | 124                        |
 | 3       | 36           | 152                        |
 +-------------+----------+----------------------------+
```

The id is the primary key for the class table, while building_id and instructor_id, are foriegn keys that reference
the primary keys in building and instructor table.

Note that the value of the primary key must not change, but that the value of foreign key can change when the referenced row changes.

### Foriegn Key Constraints<a name="ForeignConstraint" />

This section is explained in terms of MySQL.

A `Foreign Key Constraint` is used to prevent actions that would destroy links bewteen tables.

When an `UPDATE` or `DELETE` operation affects a key value in the parent table that is referenced by
foreign key in the child table, the result is dependent on the `referential action` specified.

Some of the referential actions include:

- `CASCADE`: Delete or update the row from the parent table and automatically delete or update the matching rows in the child table.

- `RESTRICT`: Rejects the delete or update operation for the parent table. 

- `SET NULL`: Delete or update the row from the parent table and set the foreign key column or columns in the child table to NULL.

Examples of the MySQL query statements are as following: 

``` 
CREATE TABLE parent (
    id INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE child (
    id INT,
    parent_id INT,
    INDEX par_ind (parent_id),
    FOREIGN KEY (parent_id)
        REFERENCES parent(id)
        ON DELETE CASCADE
) ENGINE=INNODB;
```

Note that in mysql, foriegn key constraint is only viable if both the parent and child tables use the same
storage engine.

There are more information regarding restrictions and referentail actions in this [link](#https://dev.mysql.com/doc/refman/5.6/en/create-table-foreign-keys.html).

## Composite vs Compound Key<a name="CompositeCompound" />

A `Composite Key` is a key that consists of two or more columns that uniquley identify an entity occurrence. This
key is frequently used in intermediarytables in many to many relationships.

A `Compound Key` is a composite key where each column itself is a simple key in its own right.
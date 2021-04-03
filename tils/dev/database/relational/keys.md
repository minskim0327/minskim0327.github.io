# Keys

# Table of contents

1. [Common Properties](#CommonProperties)
2. [Lookup Table](#LookUpTable)
3. [Super Key vs Candiate Key](#SuperCandidate)



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
 | 44345       | JohnAdam     | Min                       |
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



```
picknick@newname CC-20-FB-API % npx prisma db push --force-reset
```

```
picknick@newname CC-20-FB-API % npx prisma db seed              
```
ใส่ seed ที่ packgage.json

---

### Day 2 ***

---
## Regex ใช้ใน yup
| Element             | Pattern    | Description                  |                |
| ------------------- | ---------- | ---------------------------- | -------------- |
| Literal             | `hello`    | Matches exact text           |                |
| Any char            | `.`        | Any character except newline |                |
| Digit               | `\d`       | 0–9                          |                |
| Word char           | `\w`       | A–Z, a–z, 0–9, \_            |                |
| Quantifier +        | `a+`       | One or more “a”              |                |
| Quantifier \*       | `a*`       | Zero or more “a”             |                |
| Quantifier {n,m}    | `a{2,4}`   | 2 to 4 “a”                   |                |
| Start anchor        | `^hi`      | “hi” at beginning            |                |
| End anchor          | `end$`     | “end” at the end             |                |
| Word boundary       | `\bcat\b`  | Whole word “cat”             |                |
| Character class     | `[A-Za-z]` | Any letter                   |                |
| Group + alternation | \`(cat     | dog)\`                       | “cat” or “dog” |
| Lazy match          | `.*?`      | Smallest match               |                |
| Flags               | `/text/gi` | Global + case-insensitive    |                |


| Pattern | Meaning                      | Example     | Matches           |        |              |
| ------- | ---------------------------- | ----------- | ----------------- | ------ | ------------ |
| `.`     | Any character except newline | `/c.t/`     | `cat`, `cut`      |        |              |
| `^`     | Start of string              | `/^Hello/`  | `Hello world`     |        |              |
| `$`     | End of string                | `/world$/`  | `Hello world`     |        |              |
| `*`     | 0 or more                    | `/lo*/`     | `lo`, `loo`, `l`  |        |              |
| `+`     | 1 or more                    | `/lo+/`     | `lo`, `loo`       |        |              |
| `?`     | 0 or 1 (optional)            | `/colou?r/` | `color`, `colour` |        |              |
| `\`     | Escape special character     | `/\$/`      | `$`               |        |              |
| `[]`    | Match any inside brackets    | `/[aeiou]/` | a, e, i, o, u     |        |              |
| `[^]`   | Not any inside brackets      | `/[^0-9]/`  | any non-digit     |        |              |
| \`      | \`                           | OR          | \`/cat            | dog/\` | `cat`, `dog` |
| `()`    | Grouping                     | `/(abc)+/`  | `abc`, `abcabc`   |        |              |

#### common
| Shorthand | Meaning            | Equivalent      |
| --------- | ------------------ | --------------- |
| `\d`      | Digit (0–9)        | `[0-9]`         |
| `\D`      | Non-digit          | `[^0-9]`        |
| `\w`      | Word character     | `[a-zA-Z0-9_]`  |
| `\W`      | Non-word character | `[^a-zA-Z0-9_]` |
| `\s`      | Whitespace         | `[ \t\r\n\f]`   |
| `\S`      | Non-whitespace     | `[^ \t\r\n\f]`  |



#### Flag
| Flag | Description                           |
| ---- | ------------------------------------- |
| `g`  | Global (match all)                    |
| `i`  | Case-insensitive                      |
| `m`  | Multiline (`^` and `$` work per line) |


etc. https://chatgpt.com/share/685b60e5-248c-800a-8e90-5d3214849c56
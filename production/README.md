# `kith.js`
Your key to stronger passwords

| For      | File name  | Size     |
| -------- | ---------- | -------- |
| ES6      | kith.js    | 0.974 Kb |
| commonjs | kith.cjs   | 0.961 Kb |

<br>

❓ What is kith.js?
> kith.js is a powerful JavaScript library for password strength checking. It not only returns a score but also provides a dictionary full of additional information. You can set a reject score, and if the password's score falls below it, it will return 'rejected' as true. With kith.js, you can also generate random passwords effortlessly.

Example code:

ES6

```js
import kith from 'kith';
const pass = new kith();

console.log(pass.test('abc'));
```

commonjs

```js
const kith = require('kith');
const pass = new kith();

console.log(pass.test('abc'));
```

[kith.js documentation - https://github.com/Axorax/kith.js/wiki](https://github.com/Axorax/kith.js/wiki)

---

[Support me on Patreon](https://www.patreon.com/axorax) - 
[Check out my socials](https://github.com/axorax/socials)

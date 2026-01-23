const bcrypt = require("bcryptjs");
const newPassword = "asefthuko123"; // change if you want another
const hash = bcrypt.hashSync(newPassword, 10);
console.log(hash);

const accountId = 14455
let accountEmail = "pandeysurajkumar"
var accountPassoword = "12345"
accountCity = "Bihar"
// accountId = 23  not allowed
accountEmail = "sumit@ddv"
accountPassoword = "djwdjw"
accountCity = "punjab"
let accountState;

console.log(accountId);
 /*
 prefer not to use var
 because of issues in block scope and functional scope
 */
console.table([accountEmail, accountId, accountPassoword,accountCity,accountState])
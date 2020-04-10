global.crypto = require('crypto');
let readline = require('readline');

const Keygen = function (message) {
  return crypto.createHash('sha256').update(message).digest('hex');  
}

let input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question("Type your password: \n", function(password) {
  const hash = Keygen(password);

  console.log('You normal password             : ', password);
  console.log('You encrypted password (SHA-256): ', hash);
  
  input.close();
});
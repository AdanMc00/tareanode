
const fs= require("fs")

fs.appendFile('message.txt', 'este es el append text a messsage.txt', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  
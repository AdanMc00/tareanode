const fs= require("fs")

fs.copyFile('message.txt', 'mensaje2.txt', (err) => {
    if (err) throw err;
    console.log('message.txt was copied to mensaje2.txt');
  });
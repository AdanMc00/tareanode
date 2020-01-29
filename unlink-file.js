const fs= require("fs")

fs.unlink('./mensaje2.txt', (err) => {
    if (err) throw err;
    console.log('./mensaje2.txt was deleted');
  });
const fs = require('fs')

function leerdirectorio(path=""){
fs.readdir(path,(err,files) => {
    if (err) throw err;
    console.log(files)
  })
}
leerdirectorio("caprtetest")
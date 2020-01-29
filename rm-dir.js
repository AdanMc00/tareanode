const fs = require('fs')

function borrarDirectorio (path=""){
fs.rmdir(path, { recursive: true }, (err) => {
    if (err) throw err;
  })
}
borrarDirectorio("caprtetest")
// ESTE DOCUMENTO NO TENER EN CUENTA SI SE CREA
// LA CONEXION A MYSQL

const fs = require('fs');

const saveToDB = (DB) => {
    fs.writeFileSync("./src/databases/db.json",
    JSON.stringify(DB, null, 2),{
        encoding: 'utf-8'
    })
}

module.exports = { saveToDB }
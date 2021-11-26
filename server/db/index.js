const mysql = require('mysql')

//Create connection Pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port:'3306'
    user: 'root',
    password: 'password',
    database: 'ads'
})


let table1 = {};

table1.all = () => {
    return new Promise((resolve, reject)=> {
        pool.query('SELECT * FROM table1', ( err, results) => {
            if(err) {
                return reject(err)
            }
            return resolve(results)
        })

    })
}
table1.one = (id) => {
    return new Promise((resolve, reject)=> {
        pool.query('SELECT * FROM table1 WHERE id = ?', id, (err, results) => {
            if(err) {
                return reject(err)
            }
            return resolve(results)
        })

    })
}

module.exports = table1;


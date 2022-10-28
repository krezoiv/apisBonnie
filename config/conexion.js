const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'seminatiotics.c4bzijgluxzy.us-east-1.rds.amazonaws.com',
    user: 'usuario',
    password: 'usuario123',
    port: 3306,
    database: 'seminariotics'
});

connection.connect((err) => {
    if(err){
        console.log('hay un error ' , + err);
    }
    else{
        console.log('database on line');
    }
})


module.exports = {connection};
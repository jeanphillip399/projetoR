const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'db4free.net',
    user:'jean123',
    password:'jean1234',
    database:'rvampbd'
})

connection.connect((err,results)=>{
    if(err){
        console.log('Erro ao conectar com o banco de dados')
    }
    else{
        console.log('Conectado com sucesso ao banco de dados!!!')
    }
})

module.exports = connection
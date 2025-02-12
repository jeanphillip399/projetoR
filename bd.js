const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'jean3992024',
    database:'teste'
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
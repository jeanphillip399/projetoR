const express = require('express')
const app = express()
const bd = require('./bd.js')
const port = 3300
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "html")))

app.listen(port,'192.168.42.76', ()=>{
    console.log('Rodando na porta 3300')
})
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "html", "login.html"))
})
app.post('/login', (req,res)=>{
    const {nome, senha} = req.body
    const sql = 'SELECT * FROM teste WHERE (nome = ? and senha = ?)'
    bd.query(sql, [nome, senha], (err, results)=>{
        
        if(err){
            console.log('Erro ao logar', err)
        }
        if(results.length> 0){
            console.log('Registro encontrado (Entrando)')
            return res.json({diretorio:'/segunda'})
        }
        else{
            console.log('Registro não encontrado!!!')
            return res.json({erro:'registro não encontrado'})
        }
    })
})
app.get('/segunda', (req,res)=>{
    res.sendFile(path.join(__dirname, "html", "segunda.html"))
})
app.post('/salvar', (req,res)=>{
    const {forc, des, consti, inventario, nome} = req.body
    const sql = `UPDATE teste SET forc=?, des=?, consti=?, inventario=? WHERE nome=?`
    console.log(res)
    bd.query(sql, [forc, des, consti, inventario, nome],(err,results)=>{
        if(err){
            return console.log('Erro ao salvar registro', err)
        }
        else{
        res.json({
            forc:forc,
            des:des,
            consti:consti,
            inventario: inventario
        })
        }
    })
})
app.post('/lista',(req,res)=>{
    const {nome} = req.body
    const sql = 'SELECT * FROM teste WHERE (nome = ?)'
    bd.query(sql, [nome], (err, results)=>{
        if(err){
            console.log('Erro ao pegar registro atualizado', err)
        }
        if(results.length>0){
            res.json( results[0])
        }
    })
})
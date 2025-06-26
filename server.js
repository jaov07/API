import express from 'express'
import mysql from 'mysql2'
const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "projeto_github"
})

const app = express()
app.use(express.json())
const users = []


//postando usuário
app.post('/users', (req,res)=>{
    console.log(req);
    try {
        users.push(req.body)
        res.status(201).json(req.body)
    } catch (error) {
        res.send("Algo deu errado")
    }

    res.send("Usuário Publicado Com sucesso")
    
})

//obtendo todos os usuários
app.get('/users',(req, res) =>{

    let sql = "select * from users;"

    conexao.query(sql, (err, results)=> {
        if(err){
            return res.status(500).send("erro ao dar o get: ", err.message)
        }
        res.status(200).json(results)
    })
    
})



//obtendo usuário por ID
app.get('/users/:id', (req,res) =>{
     let idUser = parseInt(req.params.id)
    let sql = "select * from users where id = ?"
    conexao.query(sql, [idUser], (err, results) =>{
        if(err){
            res.status(500).send("erro ao buscar por ID: ", err.message)
        }
        res.status(200).json(results)
    })

})


app.listen(3000)

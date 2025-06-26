import express from 'express'
const app = express()
app.use(express.json())
const users = []

//postando usuário
app.post('/users', (req,res)=>{
    console.log(req);
    try {
        users.push(req.body)
    } catch (error) {
        res.send("Algo deu errado")
    }

    res.send("Usuário Publicado Com sucesso")
    
})
//obtendo todos os usuários
app.get('/users',(req, res) =>{
    res.send(users)
})

//obtendo usuário por ID
app.get('/users/:id', (req,res) =>{
     let idUser = parseInt(req.params.id)
    res.send(users[idUser - 1])
})


app.listen(3000)

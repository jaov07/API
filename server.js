import express from 'express'

const app = express()

app.get('/users',(req, res) =>{
    res.send("consegui acessar")

})


app.listen(3000)

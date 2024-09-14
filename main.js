import express, { request, response } from "express";
import cors from "cors";
import mysql from "mysql";

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "banco_teste"
});

const app = express();

app.use(cors({
    origin: "*",
}));

app.use(express.json());

app.post("/usuarios", (request, response) => {
    if(request.body.method == "POST"){
        conexao.query(`INSERT INTO usuarios (nome, email, senha) VALUES ('${request.body.nome}', '${request.body.email}', '${request.body.senha}')`, function (error, results) {
            if(error){
                response.send({"response":false});
            }else{
                response.send({"response":true});
            }
        });
    }else if(request.body.method == "GET"){
        conexao.query(`SELECT * FROM usuarios WHERE id = ${request.body.id}`, function (error, results) {
            if(error){
                response.send({"response":error});
            }else{
                if(isNaN(results)){
                    response.send({"response":"vazio"});
                }
                response.send(JSON.stringify(results));
            }
        })
    }
});

app.get("/usuarios", (request, response) => {
    response.send({"teste":"ola"});
})


app.listen(3000);
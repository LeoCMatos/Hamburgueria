//functions/hamburguer.ts
import db from '../database/dbConfig'; 
import express, { Request, Response } from 'express'; //importa o modulo express
import bodyParser from 'body-parser';



const app = express();
app.use(bodyParser.json());



interface hamburguer {
    ID: number
    Nome: string 
    Descricao: string
    Preco: number
    Categoria: string
    Ingredientes: string
    Imagem: string
    Tempo_Preparo: number
    Disponibilidade: boolean
    Opcoes_Acompanhamento: string
    Avaliacao: string
    Calorias: number
    promocao_do_dia: string
}

const hamburguers: hamburguer[] = []
let burguerIdCounter = 1


function createBurguer(req: Request, res: Response) {
    const newHamburguer = req.body
    db.query('INSERT INTO hamburguers set ?', newHamburguer,(error, results) => {
        if(error){
            console.error('Erro ao criar um novo item:', error)
            //res.status(500).json({ error: 'Erro interno do servidor' });
            return
        }

        if(results && 'insertId' in results){
            const insertId = results.insertId
            newHamburguer.ID = insertId
            res.status(201).json(newHamburguer); // Responda com o novo item criado
        } else {
          res.status(500).json({ error: 'Erro interno do servidor' });
        }
    })
}
  
module.exports = {
    createBurguer,
};
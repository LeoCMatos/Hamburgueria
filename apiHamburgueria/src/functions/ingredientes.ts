import db from '../database/dbConfig'; 
import express, { Request, Response } from 'express'; //importa o modulo express
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

interface ingrediente{
    ID: number
    nomeIngrediente: string
    calorias: number
}

const ingredientes: ingrediente[] = []

//puxar todos os ingredientes

function getAllIngredientes(req: Request, res: Response){
    db.query('SELECT * FROM ingredientes', (error, results) =>{
        if(error){
            console.error('Erro ao buscar ingredientes:', error)
            res.status(500).json({error: 'Erro interno do servidor'})
            return
        }

        res.json(results)

    })
}

//puxar um ingrediente

function getIngrediente(req: Request, res: Response){
    const id = parseInt(req.params.id);
    db.query('SELECT * FROM ingredientes Where id = ?', [id],(error, results) =>{
        if(error){
            console.error('Erro ao buscar o item: ', error)
            res.status(500).json({error: 'Erro interno do servidor'})
            return
        }
    

        if(Array.isArray(results) && results.length > 0){
            const selectedIngredientes = results[0]
            res.json(selectedIngredientes)
        } else {
            res.status(404).json({message: 'Item não encontrado'})
        }
    })
}

//criar novo ingrediente

function createIngrediente(req: Request, res: Response){
    const newIngrediente = req.body
    db.query('INSERT INTO ingredientes set ?', newIngrediente,(error, results) => {
        if(error){
            console.error('Erro ao criar um novo item:', error)
            res.status(500).json({ error: 'Erro interno do servidor' });
            return
        }

        if(results && 'insertId' in results){
            const insertId = results.insertId
            newIngrediente.ID = insertId
            res.status(201).json(newIngrediente); // Responda com o novo item criado
        } else {
          res.status(500).json({ error: 'Erro interno do servidor' });
        }
    })
}

//editar ingrediente

function updatedIngrendiente(req: Request, res: Response){
    const id = parseInt(req.params.id)
    const ingrendienteUpdate = req.body
    
    db.query('UPDATE ingredientes set ? WHERE id = ?', [ingrendienteUpdate, id], (error, results: any) =>{
        if(error){
            console.error('Erro ao atualizar o item:', error)
            res.status(500).json({error: 'Erro iterno do servidor'})
            return
        }

        if(results.affectedRows > 0){
            res.json(updatedIngrendiente)
        } else {
            res.status(404).json({message: 'Item não encontrado'})
        }
    })
}

module.exports = {
    getAllIngredientes,
    createIngrediente,
    updatedIngrendiente,
    getIngrediente
}
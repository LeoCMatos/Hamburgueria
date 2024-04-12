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
    NaoFinalizado: number
    Promocao: string
    Ativar_Promocao: string
}



const hamburguers: hamburguer[] = []
let burguerIdCounter = 1

//puxa todos os hamburguers

function getAllBurguers(req: Request, res: Response){
    db.query('SELECT * FROM hamburguers', (error,results) => {
        if(error){
            console.error('Erro ao buscar hamburguers:', error)
            res.status(500).json({error: 'Erro interno do servidor'})
            return
        }

        res.json(results)
    })
}

//selecionar 1 hamburguer

function getBurguer(req: Request, res: Response){
    const id = parseInt(req.params.id)

    db.query('SELECT * FROM hamburguers WHERE id = ?', [id], (error,results) =>{
        if(error){
            console.error('Erro ao buscar o item: ', error)
            res.status(500).json({error: 'Erro interno do servidor'})
            return
        }
        
        if(Array.isArray(results) && results.length > 0){
            const selectedBurguer = results[0]
            res.json(selectedBurguer)
        } else{
            res.status(404).json({message: 'Item não encontrado'})
        }
    })
}

// pegar todo os lanches disponiveis

function getAllLanches(req: Request, res: Response){
    db.query("SELECT * FROM hamburguers where Categoria = 'Lanches' and Disponibilidade = 1", (error,results) => {
        if(error){
            console.error('Erro ao buscar Lanches:', error)
            res.status(500).json({error: 'Erro interno do servidor'})
            return
        }

        res.json(results)
    })
}

// pegar todas as bebidas disponiveis

function getAllBebidas(req: Request, res: Response){
    db.query("SELECT * FROM hamburguers where Categoria = 'Bebidas' and Disponibilidade = 1",(error,results) =>{
        if(error){
            console.log('Erro ao buscar Lanches:', error)
            res.status(500).json({Error: 'Erro interno do servidor'})
            return
        }
        res.json(results)
    })
}

//pegar todos os acompanhamentos  disponiveis

function getAllAcompanhamentos(req: Request, res: Response){
    db.query("SELECT * FROM hamburguers where Categoria = 'Acompanhamentos' and Disponibilidade = 1",(error,results) =>{
        if(error){
            console.log('Erro ao buscar Lanches:', error)
            res.status(500).json({Error: 'Erro interno do servidor'})
            return
        }
        res.json(results)
    })
}

//criar novo produto

function createBurguer(req: Request, res: Response) {
    const newHamburguer = req.body
    db.query('INSERT INTO hamburguers set ?', newHamburguer,(error, results) => {
        if(error){
            console.error('Erro ao criar um novo item:', error)
            res.status(500).json({ error: 'Erro interno do servidor' });
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

// atualizar produto

function updatedBurguer(req: Request, res: Response){
    const id = parseInt(req.params.id)
    const burguerUpdate = req.body

    db.query('UPDATE hamburguers set ? WHERE id = ?',[burguerUpdate, id],(error, results: any) =>{
        if(error){
            console.error('Erro ao atualizar o item:', error)
            res.status(500).json({error: 'Erro interno do servidor'})
            return
        }

        if(results.affectedRows > 0){
            res.json(updatedBurguer)
        } else {
            res.status(404).json({message: 'Item não encontrado'})
        }
    })
}

//deletar produto

function deleteBurguer(req: Request, res: Response){
    const id = parseInt(req.params.id)

    db.query('DELETE FROM hamburguers WHERE id = ?', [id], (error, results: any) =>{
        if(error){
            console.log('Erro ao excluir o item: ', error)
            res.status(500).json({error: 'Erro interno do servidor'})
        }

        if(results.affectedRows > 0){
            res.status(204).send()
        } else {
            res.status(404).json({message: 'Produto não encontrado'})
        }
    })
}


  
module.exports = {
    createBurguer,
    getAllBurguers,
    getAllLanches,
    getAllBebidas,
    getAllAcompanhamentos,
    getBurguer,
    updatedBurguer,
    deleteBurguer
};
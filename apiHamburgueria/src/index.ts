import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())

const hamburguerFunctions = require('./functions/hamburguer')
const ingredientesFunctions = require('./functions/ingredientes')

// Rotas para produtos
app.get('/hamburguer', hamburguerFunctions.getAllBurguers)
app.get('/hamburguer/lanches', hamburguerFunctions.getAllLanches)
app.get('/hamburguer/bebidas', hamburguerFunctions.getAllBebidas)
app.get('/hamburguer/acompanhamentos', hamburguerFunctions.getAllAcompanhamentos)
app.get('/hamburguer/:id', hamburguerFunctions.getBurguer)
app.post('/hamburguer', hamburguerFunctions.createBurguer)
app.put('/hamburguer/:id', hamburguerFunctions.updatedBurguer)
app.delete('/hamburguer/:id', hamburguerFunctions.deleteBurguer)


//Rotas para Ingredientes
app.get('/ingredientes', ingredientesFunctions.getAllIngredientes )
app.get('/ingredientes/:id', ingredientesFunctions.getIngrediente)
app.post('/ingredientes', ingredientesFunctions.createIngrediente)
app.put('/ingredientes/:id', ingredientesFunctions.updatedIngrendiente)
app.delete('/ingredientes/:id', ingredientesFunctions.deleteIngrediente)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
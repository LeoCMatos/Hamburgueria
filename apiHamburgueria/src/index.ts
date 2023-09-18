import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())

const hamburguerFunctions = require('./functions/hamburguer')


// Rotas para hamburguers
app.get('/hamburguer', hamburguerFunctions.getAllBurguers)
app.get('/hamburguer/:id', hamburguerFunctions.getBurguer)
app.post('/hamburguer', hamburguerFunctions.createBurguer)
app.put('/hamburguer/:id', hamburguerFunctions.updatedBurguer)
app.delete('/hamburguer/:id', hamburguerFunctions.deleteBurguer)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
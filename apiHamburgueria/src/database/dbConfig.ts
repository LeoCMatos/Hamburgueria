import mysql from 'mysql2'

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'hamburgueria',
})

connection.connect((err) =>{
    if(err){
        console.error('Erro na conexão com o banco de dados:', err)
        return
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL')
})

export default connection;
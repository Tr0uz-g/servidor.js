const http = require('http');
const chalk = require('chalk');

require ('dotenv').config();
const PORT = process.env.PORT


const server1 = http.createServer((req, res)=>{

    const x = {
        nombre: 'Pablo',
        mensaje: 'Primer servidor'
    };
    
})

server1.listen(PORT, 'localhost', '127.0.0.1',()=>{
    console.log(chalk.green(`servidor corriendo en el puerto ${PORT}`))
    console.log(chalk.green('servidor en ejecucion http://localhost:8000'))
    console.log(chalk.green('Servidor en ejecución en http://127.0.0.1:8000'));
});


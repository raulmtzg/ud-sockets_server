import Server from './classes/server';
import { SERVER_PORT } from './global/environment';
import router  from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';


const server  = new Server();

// BodyParser Configuration, para recibir las peticiones POST en JSON
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// Configuracion del CORS
server.app.use( cors({ origin:true, credentials: true }) );

// Rutas de Servicios
server.app.use('/', router );

server.start( () =>{
    console.log(`Servidor corriendo en el puerto ${ SERVER_PORT}`);
    
});
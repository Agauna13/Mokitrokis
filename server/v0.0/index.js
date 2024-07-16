const http = require('http');
const cors = require('cors');
const ddbb = require('./node_modules/ddbb');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	console.log(req.url, typeof req.url, req.method );
	
	if (req.url==='/api/usuarios' && req.method ==='GET'){
		console.log('Petición correcta');
		const usuarios = ddbb.connection();
		
		console.log('usuarios');
		console.log(usuarios);

		var data ={};
		for(let i = 0; i< usuarios.length;i++){
			data[i].user = usuarios.username;
			data[i].password = usuarios.password;
		}
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json')
		res.end(JSON.stringify(data));	
 	} else {
		console.log('Error en la petición');
		res.statusCode = 404;
		res.end(JSON.stringify({message: 'Ruta no encontrada'}));
	}
	
});

server.listen(PORT, () => {
	console.log('Servidor corriendo en http://localhost:${PORT}');
});	

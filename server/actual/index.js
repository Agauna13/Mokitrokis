

const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
	host : 'localhost',
	user : 'cartavirtual',
	password: 'cv2024',
	database: 'cartavirtual'
})

db.connect(err => {
	if (err) throw err;
	console.log('Connected!!!');
});

app.use((req,res,next)=>{
	console.log('Prueba de middleware');
	next();
}
);
app.get('/usuarios', (req,res)=> {
	const query = "SELECT * FROM users";
    db.query(query, function (err, result) {
		if (err) res.status(500).send(err);
		console.log(result);
		res.json(result);
    });

});
app.post('/login',(req,res)=>{
	const {username, password} = req.body;
	const query = 'SELECT password FROM users where username = ?';
    db.query(query, [username], function (err, result) {
		if (err === null) res.send('El usuario no existe');
		console.log(err,result)
		if (err && err!=null) res.status(500).send(err);
		let respuesta;
		
		if (result && result[0].password === password){
			respuesta = 'Authenticated';
		} else {
			respuesta = 'Unauthorized';
		}
		console.log(result, password, respuesta);
		res.json(respuesta);
    });
	console.log(username, password, req.body);
});

app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});	

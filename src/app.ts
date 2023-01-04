/* import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
require('dotenv').config()



const app = express().use(bodyParser.json());

const MONGODB_URI = 'mongodb+srv://Santinou1:123456san@cluster0.0ndnyvo.mongodb.net/?retryWrites=true&w=majority';;
const PORT = process.env.PORT;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log(`Db Conectada correctamente en el puerto ${PORT}`);
		app.listen(PORT);
	})
	.catch((err: any) => {
		console.log('An error has ocurred while connecting to database:', err);
	});
 */

	require('dotenv').config()
	const Server= require("./server");
	const server= new Server();
	server.listen()
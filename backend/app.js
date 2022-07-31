//utilisation de dotenv pour masquer le contenu sensible
require('dotenv').config();
//console.log(process.env)
//importation d'express
const express = require('express');
//creation d'une application express
const app = express();
const bd = require('./connectionBd');
//importation de path
const path = require('path');
//importation de cors
const cors = require('cors');
//utilisation d'express-rate-limit pour limiter le nombre de requête 
const limite_req = require('express-rate-limit');
//importation deqs routes 
const userRoutes = require('./routes/user');
const publicationRoutes = require('./routes/publication');
const commentaireRoutes = require('./routes/commentaire');
const likesRoutes = require('./routes/likes');

bd.sync()
.then((console.log('connexion à la bd')))
.catch(error => console.log(error))
//permet de prendre toute les requétes de type application/json et permet d'acceder directement au body
app.use(express.json());
//appel de cors
app.use(cors());
//Permet à toutes les demande de toutes origine d'accéder à l'api
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
  });
  //configuration d'express-rate-limit
  const limite = limite_req({
    windowMs: 15 * 60 * 1000,
    max: 20000000,
    standardHeaders: true,
    legacyHeaders: false,
  })
  app.use(limite);
/*on attribue un middleware à chaque routes 
on utilise express static pour gerer la gestion des images*/
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/commentaire', commentaireRoutes);
app.use('/api/likes', likesRoutes);

//exportation de fichier app
module.exports = app;
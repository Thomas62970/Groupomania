const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

exports.signup = (req, res, next) => {
    const {body} = req;
    const email = body.email;
    const filename = body.avatar
    console.log(email)
    function ajout() { bcrypt.hash(req.body.password, 10)
    .then(hash =>{
        user.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: hash,
            avatar: `${req.protocol}://${req.get('host')}/images/${filename}`
        });
        return res.status(201).json({ message: 'Utilisateur créé !' })
        });
    }
    user.findOne({
      where: {
          email: email
      }
    }).then(
      (user) => {
          if(user == null){
            ajout();
              
          }else return res.status(401).json({ message: 'email deja utilisé !' });     
        }
    )
    .catch(error => res.status(401).json({ error: error }));
}

exports.login = (req, res, next) => { 
    const {body} = req;
    const email = body.email;
    user.findOne({
        where: {
            email: email
        }
    })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.id,
              moderateur : user.moderateur,
              token: jwt.sign(
                { userId: user.id },
                'bonjour',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.getOneUser = (req, res, next) => {
    const id = req.params.id;
    user.findOne({
        where: {
            id: id
        }
    })
    .then((user) => {
        if(!user){
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        res.status(200).json(user)
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };


  exports.modifyUser = (req, res, next) => {
    const userObject = req.file ? {
       ...JSON.parse(req.body.user),
     } : {
       ...req.body
     };
   
     user.findOne({
       where: {
         id: req.params.id
       }
     }).then((user) => {
       if (req.userId == req.params.id || req.userMod === 1) {
         if(userObject.nom != null){user.nom = userObject.nom;}
         if(userObject.prenom != null){user.prenom = userObject.prenom;}
         if(userObject.avatar != null){user.avatar = userObject.avatar;}  
       } else {
         return res.status(403).json({
           'error': 'UnAuthorize'
         });
       }
       user.save()
         .then(() => res.status(200).json({
           user: user
         }))
         .catch(error => res.status(400).json({
           error
         }));
     });
 };


exports.deleteUser = (req, res, next) => {
  user.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((user) => {
    if (req.userId == req.params.id || req.userMod === 1){
      user.destroy()
          .then(() => res.status(200).json({
            message: 'Utilisateur supprimé'
          }))
          .catch(error => res.status(400).json({
            error
          }));
    }
    else{
      res.status(403).json({
        'error': 'UnAuthorize'
      })}
  })
}
exports.getAllUser = (req, res, next) =>{
  user.findAll()
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) =>{
    res.status(400).json({error});
  })
}
















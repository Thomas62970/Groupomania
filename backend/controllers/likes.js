const likes = require('../models/likes');

exports.addLikes = (req, res, next) =>{
    const user_Id = req.userId;
    const publication_Id = req.params.id;
    function ajout(){
        likes.create({
            user_Id: req.userId,
            publication_Id: req.params.id
        });
        return res.status(201).json({ message: likes });
    }
    likes.findAll({
        where:{
            user_Id: user_Id,
            publication_Id: publication_Id
        }
    }).then((likes) =>{
        if(likes == false){
            ajout()
        }
        else return res.status(401).json({ message: 'publication déja liké !' });
    })
    .catch(error => res.status(401).json({ error: error }));
}

exports.allLikes = (req, res, next) =>{
    likes.findAll()
    .then((likes) => {
        res.status(200).json(likes);
      })
      .catch((error) =>{
        res.status(400).json({error});
      })
}


exports.deleteLikes = (req, res, next) => {
    likes.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((likes) => {
      if (req.userId == likes.user_Id){
        likes.destroy()
            .then(() => res.status(200).json({
              message: 'like supprimé'
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
  };

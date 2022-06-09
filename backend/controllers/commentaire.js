const commentaire = require('../models/commentaire');


exports.createCommentaire = (req, res, next) => {
    const {body} = req;
    commentaire.create({
      texte: body.texte,
      user_Id: req.userId,
      publication_Id: req.params.id
    });
    return res.status(201).json({ message: commentaire });
  };

  exports.getAll = (req, res, next) =>{
    commentaire.findAll()
    .then((commentaire) => {
      res.status(200).json(commentaire);
    })
    .catch((error) =>{
      res.status(400).json({error});
    })
  }

  exports.getOne = (req, res, next) =>{
    const id = req.params.id;
    commentaire.findOne({
      where: {
          id: id
      }
  })
  .then((commentaire) =>{
    if(!commentaire){
      return res.status(401).json({ error: 'commentaire non trouvé !' });
    }
    res.status(200).json(commentaire)
  })
  .catch((error) =>{
    res.status(404).json({error})
  })
  };

  exports.modifyCommentaire = (req, res, next) => {
    commentaire.findOne({
        where: {
          id: req.params.id
        }
      })
      .then((commentaire) => {
        if (req.userId == commentaire.user_Id || req.userMod === 1){
            if(req.body.texte != null){commentaire.texte = req.body.texte;}
        }
        else {
            return res.status(403).json({
              'error': 'UnAuthorize'
            });
          }
        commentaire.save()
          .then(() => res.status(200).json({
             commentaire
             }))
            .catch(error => res.status(400).json({
                error
            }));
    });
};

exports.deleteCommentaire = (req, res, next) => {
    commentaire.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((commentaire) => {
      if (req.userId == commentaire.user_Id || req.userMod === 1){
        commentaire.destroy()
            .then(() => res.status(200).json({
              message: 'Commentaire supprimé'
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
  
const like = require('../models/like');
const publication = require('../models/publication');


exports.createPublication = (req, res, next) => {
  const {body} = req;
  const filename = body.image
  publication.create({
    texte: body.texte,
    image: `${req.protocol}://${req.get('host')}/images/${filename}`,
    user_Id: req.userId
  });
  return res.status(201).json({ message: publication });
};

exports.getAll = (req, res, next) =>{
  publication.findAll()
  .then((publication) => {
    res.status(200).json(publication);
  })
  .catch((error) =>{
    res.status(400).json({error});
  })
}

exports.getOne = (req, res, next) =>{
  const id = req.params.id;
  publication.findOne({
    where: {
        id: id
    }
})
.then((publication) =>{
  if(!publication){
    return res.status(401).json({ error: 'Publication non trouvé !' });
  }
  res.status(200).json(publication)
})
.catch((error) =>{
  res.status(404).json({error})
})
};

exports.modifyPublication = (req, res, next) =>{
  const publicationObject = req.file ? {
    ...JSON.parse(req.body.publication),
  } : {
    ...req.body
  };

  publication.findOne({
    where: {
      id: req.params.id
    }
  }).then((publication) => {
    if (req.userId == publication.user_Id || req.userMod === 1) {
      if(publicationObject.texte != null){publication.texte = publicationObject.texte;}
      if(publicationObject.image != null){publication.image = publicationObject.image;}
    } else {
      return res.status(403).json({
        'error': 'UnAuthorize'
      });
    }
    publication.save()
      .then(() => res.status(200).json({
        publication
      }))
      .catch(error => res.status(400).json({
        error
      }));
  });
};
exports.deletePublication = (req, res, next) => {
  publication.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((publication) => {
    if (req.userId == publication.user_Id|| req.userMod === 1){
      publication.destroy()
          .then(() => res.status(200).json({
            message: 'Publication supprimé'
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

exports.likePublication = (req, res, next) =>{
  const likeStatus = req.body.like;
  const publicationId = req.params.id;
      publication.findOne({
      where: {
        id: publicationId
      }
    })
    .then((publication) =>{
      if(likeStatus == 1){
        publication.like += 1;
        publication.save()
        .then(() => res.status(200).json({
          message: 'Publication liké'
        }))
        .catch(error => res.status(400).json({
          error
        }));
      }
      else if(likeStatus == -1){
        publication.like += -1;
        publication.save()
        .then(() => res.status(200).json({
          message: 'Publication disliké'
        }))
        .catch(error => res.status(400).json({
          error
        }));
      }
      else res.status(403).json({
        'error': 'UnAuthorize'
      })
    })
    .catch((error) =>{
      res.status(404).json({error})
    })
}
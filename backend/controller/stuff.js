const Thing = require("../models/thing");

exports.createThing = (req, res, next) => {
  delete req.body._id; // Ensure the _id is not set by the client before inserting into the database

  const thing = new Thing({
    ...req.body, // Spread operator to copy all properties from req.body (title, description, imageUrl, price, userId)
  });

  thing
    .save() // Save the object in the database
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getThings = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
};

exports.getThing = (req, res, next) => {
  Thing.find() // Get all things from the database = SELECT * FROM things
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateThing = (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteThings = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

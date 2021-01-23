const db = require("../models");
const Jenis = db.jenis;

exports.create = (req, res) => {
  const jenis = new Jenis({
    nama: req.body.nama,
  });

  // Save Jenis in the database
  jenis
    .save(jenis)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Jenis.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Jenis.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Jenis.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving with id=" + id });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Jenis.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Jenis with id=${id}. Maybe Jenis was not found!`,
        });
      } else res.send({ message: "Jenis was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Jenis with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Jenis.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Jenis with id=${id}. Maybe Jenis was not found!`,
        });
      } else {
        res.send({
          message: "Jenis was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Jenis with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
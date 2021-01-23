const db = require("../models");
const Kedai = db.kedai;

exports.create = (req, res) => {
  const kedai = new Kedai({
    nama: req.body.nama,
    foto: req.files[0].filename,
    informasi: req.body.informasi,
    no_hp: req.body.no_hp,
    nama_pemilik: req.body.nama_pemilik,
    id_jadwal: req.body.id_jadwal,
  });

  // Save Kedai in the database
  kedai
    .save(kedai)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Kedai.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Kedai.find(condition).populate('id_jadwal')
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

  Kedai.findById(id)
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

  Kedai.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Kedai with id=${id}. Maybe Kedai was not found!`,
        });
      } else res.send({ message: "Kedai was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Kedai with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Kedai.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Kedai with id=${id}. Maybe Kedai was not found!`,
        });
      } else {
        res.send({
          message: "Kedai was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Kedai with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
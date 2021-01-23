const db = require("../models");
const Jadwal = db.jadwal;

exports.create = (req, res) => {
  const jadwal = new Jadwal({
    jam_mulai: req.body.jam_mulai,
    jam_akhir: req.body.jam_akhir,
  });

  // Save Jadwal in the database
  jadwal
    .save(jadwal)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Jadwal.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Jadwal.find(condition)
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

  Jadwal.findById(id)
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

  Jadwal.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Jadwal with id=${id}. Maybe Jadwal was not found!`,
        });
      } else res.send({ message: "Jadwal was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Jadwal with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Jadwal.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Jadwal with id=${id}. Maybe Jadwal was not found!`,
        });
      } else {
        res.send({
          message: "Jadwal was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Jadwal with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
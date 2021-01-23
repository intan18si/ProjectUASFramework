const db = require("../models");
const Menu = db.menu;

exports.create = (req, res) => {
  const menu = new Menu({
    id_kedai: req.body.id_kedai,
    nama: req.body.nama,
    harga: req.body.harga,
    informasi: req.body.informasi,
    id_jenis: req.body.id_jenis,
  });

  // Save Menu in the database
  menu
    .save(menu)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Menu.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Menu.find(condition).populate('id_kedai').populate('id_jenis')
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

  Menu.findById(id)
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

  Menu.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Menu with id=${id}. Maybe Menu was not found!`,
        });
      } else res.send({ message: "Menu was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Menu with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Menu.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Menu with id=${id}. Maybe Menu was not found!`,
        });
      } else {
        res.send({
          message: "Menu was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Menu with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
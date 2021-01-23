module.exports = (app) => {
    const kedais = require("../controller/kedai.controller.js");
  
    var router = require("express").Router();
  
    var multer = require("multer");
    var path = require("path");
    const generateFileName = () => {
        const dateNow = Date.now();
        const random = Math.floor(Math.random() * 9000000000000) + 1000000000000;
        return `${dateNow}-${random}`;
    };

    var upload = multer({
      storage: multer.diskStorage({
          destination: function (req, file, callback) { //untuk mengarahkan penempatan file yang di upload
              callback(null, "./uploads/gambar");
          },
          filename: function (req, file, callback) { //meganti nama file
              callback(
                  null,
                  Date.now() + 
                  Math.floor(Math.random() * 9000000000000) +
                  1000000000000 +
                  path.extname(file.originalname)
              );
            },
          }),
  
          fileFilter: function (req, file, callback) { //cek nama ext
              var ext = path.extname(file.originalname);
              if (
                  ext !== ".png" &&
                  ext !== ".jpg" &&
                  ext !== ".gif" &&
                  ext !== ".jpeg"
              ) {
                  return callback(/*res.end('Only images are allowed')*/ null, false);
              }
              callback(null, true);
          },
      });
      router.post("/", upload.any(), kedais.create);
              

    router.get("/", kedais.findAll);
  
    router.get("/:id", kedais.findOne);
  
    router.put("/:id", kedais.update);
  
    router.delete("/:id", kedais.delete);
  
    app.use("/api/kedai", router);
  };
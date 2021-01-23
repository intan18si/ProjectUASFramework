module.exports = (app) => {
    var router = require("express").Router();
    const jeniss = require("../controller/jenis.controller.js");

    var router = require("express").Router();
  
    router.post("/", jeniss.create);
    
    router.get("/", jeniss.findAll);
  
    router.get("/:id", jeniss.findOne);
  
    router.put("/:id", jeniss.update);
  
    router.delete("/:id", jeniss.delete);
  
    app.use("/api/jenis", router);
  };
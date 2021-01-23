module.exports = (app) => {
    var router = require("express").Router();
    const jadwals = require("../controller/jadwal.controller.js");

    var router = require("express").Router();
  
    router.post("/", jadwals.create);
    
    router.get("/", jadwals.findAll);
  
    router.get("/:id", jadwals.findOne);
  
    router.put("/:id", jadwals.update);
  
    router.delete("/:id", jadwals.delete);
  
    app.use("/api/jadwal", router);
  };
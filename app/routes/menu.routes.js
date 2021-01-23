module.exports = (app) => {
    var router = require("express").Router();
    const menus = require("../controller/menu.controller.js");

    var router = require("express").Router();
  
    router.post("/", menus.create);
    
    router.get("/", menus.findAll);
  
    router.get("/:id", menus.findOne);
  
    router.put("/:id", menus.update);
  
    router.delete("/:id", menus.delete);
  
    app.use("/api/menu", router);
  };
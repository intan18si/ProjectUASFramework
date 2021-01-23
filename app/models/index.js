const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.kedai = require("./kedai.model.js")(mongoose);
db.jadwal = require("./jadwal.model.js")(mongoose);
db.menu = require("./menu.model.js")(mongoose);
db.jenis = require("./jenis.model.js")(mongoose);
module.exports = db;
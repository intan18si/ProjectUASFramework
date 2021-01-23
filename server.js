const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.options("*", cors());
//app.use(bodyParser.json());

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: true }));
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.json({
    message: "Semangat Ujian Akhir Semesternya",
  });
});
require("./app/routes/kedai.routes")(app);
require("./app/routes/jadwal.routes")(app);
require("./app/routes/menu.routes")(app);
require("./app/routes/jenis.routes")(app);
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server backend port ${PORT}.`);
});
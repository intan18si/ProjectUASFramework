const mongoose = require("mongoose"); //untuk koneksi ke database mongodb

// urlnya didapatkan saat kita test conection saat di mongodb cloud <password> = diganti dengan password di mongodb tadi
// dan <dbname> diubah dengan nama database yang telah kita buat
// url untuk komunikasi ke mongodbnya.
const url = `mongodb://uas:zXraeanlP9z0uqc8@cluster0-shard-00-00.ka5bt.mongodb.net:27017,cluster0-shard-00-01.ka5bt.mongodb.net:27017,cluster0-shard-00-02.ka5bt.mongodb.net:27017/projekuas?ssl=true&replicaSet=atlas-131kh1-shard-0&authSource=admin&retryWrites=true&w=majority`;


const connectionParams = { //merupakan variable dalam bentuk array untuk connection paramns
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose //salah satu library node.js dihubungkan untuk mongodb.
  .connect(url, connectionParams)
  .then(() => { //jika berhasil akan mencetak pada terminal kita.
    console.log("Connected to database ");
  })
  .catch((err) => { // ketika gagal akan menampilkan errornya.
    console.error(`Error connecting to the database. \n${err}`);
  });
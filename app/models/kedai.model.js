module.exports = (mongoose) => {
  const { Schema } = require("mongoose");
    const Kedai = mongoose.model(
      "kedai",
      mongoose.Schema(
        {
          nama: String,
          foto: String,
          informasi: String,
          no_hp: String,
          nama_pemilik: String,
          id_jadwal: {
            type: Schema.Types.ObjectId,
            ref: 'jadwal',
        },
        },
        { timestamps: true }
      )
    );
  
    return Kedai;
  };
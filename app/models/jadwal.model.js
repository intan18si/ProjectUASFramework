module.exports = (mongoose) => {
  const Jadwal = mongoose.model(
    "jadwal",
    mongoose.Schema(
      {
        jam_mulai: String,
        jam_akhir: String,
      },
      { timestamps: true }
    )
  );

  return Jadwal;
};
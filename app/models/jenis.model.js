module.exports = (mongoose) => {
    const Jenis = mongoose.model(
      "jenis",
      mongoose.Schema(
        {
          nama: String,
        },
        { timestamps: true }
      )
    );
  
    return Jenis;
  };
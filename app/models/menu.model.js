module.exports = (mongoose) => {
    const { Schema } = require("mongoose");
          const Menu = mongoose.model(
            "menu",
            mongoose.Schema(
              {
                nama: String,
                harga: String,
                informasi: String,
                id_kedai: {
                  type: Schema.Types.ObjectId,
                  ref: 'kedai',
              },
                id_jenis: {
                  type: Schema.Types.ObjectId,
                  ref: 'jenis',
              },
  
              },
              { timestamps: true }
            )
          );
        
          return Menu;
        };
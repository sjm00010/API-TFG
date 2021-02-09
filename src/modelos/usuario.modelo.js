module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        usuario: String,
        pass: String
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Usuario = mongoose.model("usuario", schema);
  
    return Usuario;
  };
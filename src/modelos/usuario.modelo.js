// Esquema de un docente
export default mongoose => {
  const schema = mongoose.Schema(
    {
      usuario: {type: String, unique: true, required: true, minLength: [4, "El usuario debe tener 4 caracteres mínimo"]},
      pass: {type: String, required: true, minLength: [6, "La contraseña debe tener 6 caracteres mínimo"]}
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
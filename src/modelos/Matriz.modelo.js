import { EjercicioSchema } from "./esquemas_aux.js";

export default mongoose => {
    const schema = mongoose.Schema(
        {
            ...EjercicioSchema.obj
        }
    );
  
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
  
    const EjMatriz = mongoose.model("ejercicios_Matrices", schema);
  
    return EjMatriz;
  };
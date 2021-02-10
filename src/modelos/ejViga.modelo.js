import { EjercicioSchema, Tramo, Elemento } from "./esquemas_aux.js";

export default mongoose => {
    const schema = mongoose.Schema(
        {
            ...EjercicioSchema.obj,
            tramos: [Tramo],
            elementos: [Elemento],
            formulas: [String]
        }
    );
  
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
  
    const EjViga = mongoose.model("ejercicios_vigas", schema);
  
    return EjViga;
  };
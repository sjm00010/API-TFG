import { EjercicioSchema } from "./esquemas_aux.js";

// Esquema para un ejercicio matricial
export default mongoose => {
    const schema = mongoose.Schema(
        {
            ...EjercicioSchema.obj,
            materiales: [],
            secciones: [],
            nodos: [],
            barras: [],
            bc: [],
            cargas: []
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
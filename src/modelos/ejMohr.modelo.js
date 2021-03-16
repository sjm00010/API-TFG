import { EjercicioSchema } from "./esquemas_aux.js";

export default mongoose => {
    const schema = mongoose.Schema(
        {
            ...EjercicioSchema.obj,
            sx = Number,
            sy = Number,
            txy = Number,
            s1 = Number,
            s2 = Number,
            a = Number,
            B = {type: Number, required: true},
            E = {type: Number, required: true},
            v = {type: Number, required: true},
        }
    );
  
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
  
    const EjViga = mongoose.model("ejercicios_Mohr", schema);
  
    return EjViga;
  };
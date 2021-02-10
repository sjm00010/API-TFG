import mongoose from "mongoose";

export const EjercicioSchema = mongoose.Schema(
  {
    dificultad: {type: Number, default: 1, min: 1, max:3, required: true},
    enunciado: {type: String, required: true},
    ayuda: {type: String, required: true},
    video: {type: String, required: true}
  }
);

export const Tramo = mongoose.Schema(
  {
    min: {type: Number, required: true},
    max: {type: Number, required: true},
    valor: {type: Number, required: true}
  }
);

export const Elemento = mongoose.Schema(
  {
    tipo: {type: String, required: true}, // Tipo de elemento
    segmento: {type: Number, required: true}, // Indice tramo inicio
    segmentoFinal: Number, // Indice tramo fin (Opcional)
    magnitud: {type: Number, required: true}, // Magnitud del elemento por defecto
    min: {type: Number, required: true}, // Valor mínimo de la magnitud
    max: {type: Number, required: true}, // Valor máximo de la magnitud
    idBarra: Number, // Nombre de la barra (Opcional)
    d: Number, // Magnitud d para la barra (Opcional)
    minD: Number, // Mínimo para d de la barra (Opcional)
    maxD: Number, // Máximo para d de la barra (Opcional)
  }
);
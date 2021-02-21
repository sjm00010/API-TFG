import mongoose from "mongoose";

export const EjercicioSchema = mongoose.Schema(
  {
    dificultad: {type: Number, default: 1, min: 1, max:3, required: true},
    enunciado: {type: String, required: true},
    ayuda: String,
    video: String
  }
);

export const Tramo = mongoose.Schema(
  {
    min: {type: Number, required: true},
    max: {type: Number, required: true},
    valor: {type: Number, required: true}
  }
);

export const Formula = mongoose.Schema(
  {
    axiles: {type: String, required: true},
    cortantes: {type: String, required: true},
    flectores: {type: String, required: true}
  }
);

export const Elemento = mongoose.Schema(
  {
    tipo: {type: String, required: true}, // Tipo de elemento
    segmento: Number, // Indice tramo inicio
    segmentoFinal: Number, // Indice tramo fin (Opcional)
    magnitud: {type: String, required: true}, // Magnitud del elemento por defecto
    min: Number, // Valor mínimo de la magnitud (Opcional)
    max: Number, // Valor máximo de la magnitud (Opcional)
    nombre: {type: String, required: true}, // Nombre (ID)
    d: Number, // Magnitud d para la barra (Opcional)
    minD: Number, // Mínimo para d de la barra (Opcional)
    maxD: Number, // Máximo para d de la barra (Opcional)
  }
);
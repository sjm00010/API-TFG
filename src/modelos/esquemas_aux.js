import mongoose from "mongoose";

/**
 * Esquema general de un ejercicio, información básica para todos los tipos de ejercicio
 */
export const EjercicioSchema = mongoose.Schema(
  {
    dificultad: {type: Number, default: 1, min: 1, max:3, required: true},
    enunciado: {type: String, required: true},
    ayuda: String,
    video: String
  }
);

/**
 * Esquema del tramo de una viga
 */
export const Tramo = mongoose.Schema(
  {
    min: {type: Number, required: true},
    max: {type: Number, required: true},
    valor: {type: Number, required: true}
  }
);

/**
 * Esquema de las distintas fórmulas del ejercicio de cálculo de apoyo en vigas
 */
export const Formula = mongoose.Schema(
  {
    axiles: {type: String, required: true},
    cortantes: {type: String, required: true},
    flectores: {type: String, required: true},
    deformada: String
  }
);

/**
 * Esquema de los distintoos elementos del ejercicio de cálculo de apoyo en vigas
 */
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
    orientacion: String // Orientación d de la barra (Opcional)
  }
);
// var motivoVisita = Joi.object().keys({
//     strOrigen: Joi.string(),
//     intEdad: Joi.number(),
//     strMotivo: Joi.string()
// }).required();

export class MotivoModelo{
    strOrigen: string;
    intEdad: Number;
    strMotivo: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
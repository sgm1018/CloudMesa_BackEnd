export class RItem<T> {
    Value : T = null;
    Resultado : number=0;
    Mensaje : string="";

    constructor({Value = null, Resultado = 0, Mensaje = ""} : {Value? : T, Resultado? : number, Mensaje? : string} = {}) {
        this.Value = Value;
        this.Resultado = Resultado;
        this.Mensaje = Mensaje;
    }
}

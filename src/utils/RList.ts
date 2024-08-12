export class RList<T> {
    Value : T[] = [];
    Resultado : number=0;
    Mensaje : string="";

    constructor({Value = [], Resultado = 0, Mensaje = ""} : {Value? : T[], Resultado? : number, Mensaje? : string} = {}) {
        this.Value = Value;
        this.Resultado = Resultado;
        this.Mensaje = Mensaje;
    }
}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "../Base.service";
import { User } from "./User.schema";
import { promises } from "dns";
import { RItem } from "src/utils/Ritem";

@Injectable()
export class UserService extends BaseService<User> {


    constructor(@InjectModel(User.name) model: Model<User>) {
        super(model);
    }


    public async getByEmail(email: string) : Promise<RItem<User>> {
        const datos = await this.entidadModel.findOne( { Email: email } );
        if (!datos){
            return new RItem<User>({
                Resultado: -1,
                Mensaje: "Usuario no encontrado"
            });
        }
        return new RItem<User>({
            Value: datos,
            Resultado: 0,
            Mensaje: "Usuario encontrado"
        });
    }

    

}

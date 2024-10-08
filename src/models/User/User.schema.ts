import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Entidad } from "../Entidad.schema";


export type UserDocuement = HydratedDocument<User>;

@Schema()
export class User extends Entidad {
    @Prop( {required : true}) Email: string;
    @Prop( {required : true}) Rol: string[];
    @Prop( {type : Buffer, required: true} ) HashedPassword: Buffer;
    @Prop( {type : Buffer, required: true} ) Salt: Buffer;
}

export const UserSchema = SchemaFactory.createForClass(User);


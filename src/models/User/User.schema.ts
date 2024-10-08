import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Entidad } from "../Entidad.schema";


export type UserDocuement = HydratedDocument<User>;

@Schema()
export class User extends Entidad {
    @Prop( {required : true}) Email: string;
    @Prop( {required : true}) Rol: string[];
    @Prop({ required: true }) FirstName: string;
    @Prop({ required: true }) LastName: string;
    @Prop({ required: true }) DateOfBirth: Date;
    @Prop( {type : Buffer, required: true} ) HashedPassword: Buffer;
    @Prop({ required: false}) ProfilePictureUrl?: string;

}    

export const UserSchema = SchemaFactory.createForClass(User);


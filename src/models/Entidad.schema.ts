import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EntidadDocument = HydratedDocument<Entidad>;

@Schema()
export class Entidad {

    @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true }) Id?: mongoose.Schema.Types.ObjectId; // Aquí se configura como primary key
    @Prop({ required: false }) FechaCreacion?: Date;
    @Prop({ required: false }) FechaModificacion?: Date;
    @Prop({ required: false }) UsuarioCreacion?: string;
    @Prop({ required: false }) UsuarioModificacion?: string;

}

export const EntidadSchema = SchemaFactory.createForClass(Entidad);


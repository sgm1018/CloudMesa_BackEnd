import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Entidad } from "../Entidad.schema";

export type PermisionDocument = HydratedDocument<Permission>;
@Schema()
export class Permission extends Entidad {

    @Prop({ type: Types.ObjectId , required: true })
    FileId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, required: true })
    GranteeByUser: Types.ObjectId;

    @Prop({ type: Array, required: true })
    Permission: string[];

    @Prop({ type: Date, required: true })
    ExpirationDate: Date;

}

export const PermissionSchema = SchemaFactory.createForClass(Permission);


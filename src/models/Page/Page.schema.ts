import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Entidad } from "../Entidad.schema";

export type PageDocument = HydratedDocument<File>;
@Schema()
export class Page extends Entidad {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    OwnerId: Types.ObjectId;

    @Prop({ type: String, required: true })
    PageRoute: string;

    @Prop({ type: String, required: true })
    MimeType: string;

    @Prop({ type: Number, required: true })
    Size: number;

    @Prop({ type: Boolean, default: false })
    IsPublic: boolean;
}

export const PageSchema = SchemaFactory.createForClass(Page);


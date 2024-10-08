import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Entidad } from "../Entidad.schema";

export type FileDocument = HydratedDocument<File>;
@Schema()
export class File extends Entidad {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    OwnerId: Types.ObjectId;

    @Prop({ type: String, required: true })
    Name: string;

    @Prop({ type: String, required: true })
    Type: string;

    @Prop({ type: String, required: true })
    MimeType: string;

    @Prop({ type: Number, required: true })
    Size: number;

    @Prop({ type: String, default: false })
    ParentId: boolean;

    @Prop({ type: String, default: false })
    Description: boolean;
}

export const FileSchema = SchemaFactory.createForClass(File);


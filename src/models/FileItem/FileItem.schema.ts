import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Entidad } from "../Entidad.schema";

export type FileDocument = HydratedDocument<File>;
@Schema()
export class FileItem extends Entidad {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    OwnerId: Types.ObjectId;

    @Prop({ type: String, required: true })
    FileName: string;

    @Prop({ type: String, required: true })
    FilePath: string;

    @Prop({ type: String, required: true })
    MimeType: string;

    @Prop({ type: Number, required: true })
    Size: number;

    @Prop({ type: Boolean, default: false })
    IsPublic: boolean;
}

export const FileSchema = SchemaFactory.createForClass(File);


import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FileItem, FileDocument } from "./FileItem.schema";
import { Model } from "mongoose";
import { BaseService } from "../Base.service";

@Injectable()
export class FileItemService extends BaseService<FileItem> {


    constructor(@InjectModel(File.name) FileModel: Model<FileItem>) {
        super(FileModel);
    }

    

}

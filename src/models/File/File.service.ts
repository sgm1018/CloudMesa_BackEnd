import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { File, FileDocument } from "./File.schema";
import { Model } from "mongoose";
import { BaseService } from "../Base.service";

@Injectable()
export class FileService extends BaseService<File> {


    constructor(@InjectModel(File.name) FileModel: Model<File>) {
        super(FileModel);
    }

    

}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Page } from "./Page.schema";
import { Model } from "mongoose";
import { BaseService } from "../Base.service";

@Injectable()
export class PageService extends BaseService<Page> {


    constructor(@InjectModel(Page.name) FileModel: Model<Page>) {
        super(FileModel);
    }

    

}

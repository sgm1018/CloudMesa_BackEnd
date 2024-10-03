import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "../Base.service";
import { Permission } from "./Permission.schema";

@Injectable()
export class PermissionService extends BaseService<Permission> {


    constructor(@InjectModel(File.name) model: Model<Permission>) {
        super(model);
    }

    

}

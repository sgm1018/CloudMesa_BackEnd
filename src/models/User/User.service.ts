import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "../Base.service";
import { User } from "./User.schema";

@Injectable()
export class UserService extends BaseService<User> {


    constructor(@InjectModel(File.name) model: Model<User>) {
        super(model);
    }

    

}

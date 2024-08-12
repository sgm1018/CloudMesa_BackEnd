import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "../Base.service";
import { User } from "./User.schema";
import { RItem } from "src/utils/Ritem";
import bcrypt from 'bcrypt';
@Injectable()
export class UserService extends BaseService<User> {


    constructor(@InjectModel(User.name) UserModel: Model<User>) {
        super(UserModel);
    }


    public async findByEmail(email: string): Promise<RItem<User>> {
        const datos = await this.entidadModel.findOne({ Email: email }).exec();
        if (!datos) {
            return new RItem<User>({
                Mensaje: "No se encontró el usuario",
                Resultado: -1
            });
        }
        return new RItem<User>({
            Value: datos,
            Mensaje: "Usuario encontrado correctamente"
        });
    }

    public async CreateUser(email: string, password: string, password2: string): Promise<RItem<User>> {
        const datos = await this.entidadModel.findOne({ Email: email }).exec();
        if (datos) {
            return new RItem<User>({
                Mensaje: "El usuario ya existe",
                Resultado: -1
            });
        }

        if(password !== password2){
            return new RItem<User>({
                Mensaje: "Las contraseñas no coinciden",
                Resultado: -1
            });
        }   
        this.generatePasswordHash(password)
            .then(hash => {
                console.log('Hashed password:', hash);
            })
            .catch(err => {
                console.error('Error hashing password:', err);
        });

        const user = new User();
        user.Email = email;
        user.HashedPassword = password;
        const insertar = await this.create(user);
        if (insertar.Resultado !== 0) {
            return insertar;
        }
        return insertar;

    }


    public async generatePasswordHash(password: string): Promise<string> {
        const saltRounds = 10; //cost of hashing the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    public async verifyPassword(password: string, hash: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }





}

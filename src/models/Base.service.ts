import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Entidad, EntidadDocument } from "./Entidad.schema";
import { RList } from "src/utils/Rlist";
import { RItem } from "src/utils/Ritem";

@Injectable()
export class BaseService<T extends Entidad> {
    constructor(protected readonly entidadModel: Model<T>) {}

    public async create(entidad: Entidad): Promise<RItem<T>> {
        const datos = await this.entidadModel.create(entidad);
        if (!datos) {
            return new RItem<T>({
                Mensaje: "Error al crear la entidad",
                Resultado: -1
            });
        }
        return new RItem<T>({
            Value: datos,
            Mensaje: "Entidad creada correctamente"
        });
    }

    public async getAll(): Promise<RList<T>> {
        const datos = await this.entidadModel.find();
        if (!datos) {
            return new RList<T>({
                Mensaje: "Error al obtener las entidades",
                Resultado: -1
            });
        }
        return new RList<T>({
            Value: datos,
            Mensaje: "Entidades obtenidas correctamente"
        });
    }

    public async getById(id: string): Promise<RItem<T>> {
        const datos = await this.entidadModel.findById(id);
        if (!datos) {
            return new RItem<T>({
                Mensaje: "No se encontró la entidad",
                Resultado: -1
            });
        }
        return new RItem<T>({
            Value: datos,
            Mensaje: "Entidad obtenida correctamente"
        });
    }

    public async update(id: string, entidad: Partial<T>): Promise<RItem<T>> {
        const datos = await this.entidadModel.findByIdAndUpdate(id, { $set: entidad }, { new: true });
        if (!datos) {
            return new RItem<T>({
                Mensaje: "No se pudo actualizar la entidad",
                Resultado: -1
            });
        }
        return new RItem<T>({
            Value: datos,
            Mensaje: "Entidad actualizada correctamente"
        });
    }

    public async delete(id: string): Promise<RItem<T>> {
        const datos = await this.entidadModel.findByIdAndDelete(id);
        if (!datos) {
            return new RItem<T>({
                Mensaje: "No se pudo eliminar la entidad",
                Resultado: -1
            });
        }
        return new RItem<T>({
            Value: datos,
            Mensaje: "Entidad eliminada correctamente"
        });
    }
}

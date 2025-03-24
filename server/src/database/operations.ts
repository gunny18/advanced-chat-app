import {
  EntityTarget,
  Repository,
  FindOptionsWhere,
} from "typeorm";
import ConnectionManager from "./connection";
import { ApiError } from "../utils";

interface NamedThing {
  name: string;
}

abstract class CommonDatabaseOperations<Entity extends NamedThing> {
  protected repository: Repository<Entity>;

  constructor(target: EntityTarget<Entity>) {
    this.repository = ConnectionManager.AppDataSource.getRepository(target);
  }

  getFindWhereConditions(conditions?: Record<string, any>) {
    const findOptions: FindOptionsWhere<Entity> = conditions || {};
    return findOptions;
  }

  async create(data: any): Promise<Entity> {
    const entity = this.repository.create(data);
    const savedEntity = await this.repository.save(entity as any);
    return savedEntity;
  }

  async findOneAndUpdate(
    conditions: Record<string, any>,
    updatedData: Record<string, any>
  ): Promise<Entity> {
    const foundEntity = (await this.findOne(conditions)) as Record<string, any>;
    Object.keys(updatedData).forEach((key) => {
      if (key in foundEntity) {
        foundEntity[key] = updatedData[key];
      }
    });
    const savedEntity = await this.repository.save(foundEntity as any);
    return savedEntity;
  }

  async findOneAndDelete(conditions: Record<string, any>): Promise<void> {
    const foundEntity = await this.findOne(conditions);
    await this.repository.remove(foundEntity);
  }

  async findManyAndDelete(conditions: Record<string, any>) {
    const foundEntities = await this.find(conditions);
    await this.repository.remove(foundEntities);
  }

  async findOne(where: Record<string, any>): Promise<Entity> {
    const foundEntity = await this.repository.findOne({
      where: this.getFindWhereConditions(where),
    });
    if (!foundEntity) throw new ApiError(404, "Entity not found");
    return foundEntity;
  }

  async find(where?: Record<string, any>): Promise<Entity[]> {
    const foundEntity = await this.repository.find({
      where: this.getFindWhereConditions(where),
    });
    if (!foundEntity) throw new ApiError(404, "Entity not found");
    return foundEntity;
  }
}

export default CommonDatabaseOperations;

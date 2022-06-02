import { IGenericRepository } from 'src/core/abstracts';
import { Repository } from 'typeorm';

export class MysqlGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  findAll(): Promise<T[]> {
    return this._repository.find();
  }

  findOne(where: any): Promise<T> {
    return this._repository.findOne({
      where,
    });
  }

  findMany(relations: [string], where: any): Promise<T[]> {
    return this._repository.find({ relations: [...relations], where });
  }

  create(item: T) {
    return this._repository.create(item);
  }

  update(item: T) {
    return this._repository.save(item);
  }
}

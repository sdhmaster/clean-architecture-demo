export abstract class IGenericRepository<T> {
  abstract findAll(): Promise<T[]>;

  abstract findOne(where: any): Promise<T>;

  abstract findMany(relations: [string], where: any): Promise<T[]>;

  abstract create(item: T);

  abstract update(item: T);
}

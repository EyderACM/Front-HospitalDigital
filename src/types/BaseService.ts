interface BaseService<Entity, RawEntity> {
  create: (entity: Entity) => Promise<RawEntity>;
  delete: (id: number) => Promise<RawEntity>;
  update: (entity: Entity) => Promise<RawEntity>;
  getAll: () => Promise<RawEntity[]>;
  get: (id: number) => Promise<RawEntity>;
}

export default BaseService;

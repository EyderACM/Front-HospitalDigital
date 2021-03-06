export type DtoToEntity<T, U> = (rawEntity: T) => U;

export type EntityToDto<T, U> = (entity: U) => T;

export type RawDtoToExtendedDto<U> = (entity: U) => U;

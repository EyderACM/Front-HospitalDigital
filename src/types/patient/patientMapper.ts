import { DtoToEntity } from "types/BaseMapper";
import IPatient from "./patient";
import IPatientDTO from "./patientDTO";

const dtoToEntityMapper: DtoToEntity<IPatientDTO, IPatient> = ({
  id,
  first_name,
  last_name,
  age,
  sex,
  birth_date,
  city_name,
}: IPatientDTO): IPatient => ({
  id,
  firstName: first_name,
  lastName: last_name,
  age,
  sex,
  birthDate: birth_date,
  cityName: city_name,
});

const entityToDTOMapper: DtoToEntity<IPatient, IPatientDTO> = ({
  firstName,
  lastName,
  age,
  sex,
  birthDate,
  cityName,
}: IPatient): IPatientDTO => ({
  first_name: firstName,
  last_name: lastName,
  age,
  sex,
  birth_date: birthDate,
  city_name: cityName,
});

export { dtoToEntityMapper, entityToDTOMapper };

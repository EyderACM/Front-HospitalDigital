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
  hospital,
  guardian,
}: IPatientDTO): IPatient => ({
  id,
  firstName: first_name,
  lastName: last_name,
  age,
  sex,
  cityName: city_name,
  hospitalName: hospital?.name,
  guardianName: `${guardian?.first_name} ${guardian?.last_name}`,
  guardianPhone: guardian?.phone,
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

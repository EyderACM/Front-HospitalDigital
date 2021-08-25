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
  guardian_first_name,
  guardian_last_name,
  guardian_phone,
  hospital_name,
}: IPatientDTO): IPatient => ({
  id,
  firstName: first_name,
  lastName: last_name,
  age: +age,
  sex,
  cityName: city_name,
  hospitalName: hospital ? hospital?.name : hospital_name,
  guardianName: guardian
    ? `${guardian?.first_name} ${guardian?.last_name}`
    : `${guardian_first_name} ${guardian_last_name}`,
  guardianPhone: guardian ? guardian?.phone : guardian_phone,
  birthDate: birth_date,
});

const entityToDTOMapper: DtoToEntity<IPatient, IPatientDTO> = ({
  firstName,
  lastName,
  age,
  sex,
  birthDate,
  cityName,
  hospitalId,
  guardianId,
}: IPatient): IPatientDTO => ({
  first_name: firstName,
  last_name: lastName,
  age,
  sex,
  birth_date: birthDate,
  city_name: cityName,
});

const entityToRawDTOMapper = ({
  hospitalId,
  guardianId,
  ...rest
}: IPatient) => ({
  ...entityToDTOMapper(rest),
  hospital: hospitalId,
  guardian: guardianId,
});

const entityToRawDTO = ({
  firstName,
  lastName,
  age,
  sex,
  birthDate,
  cityName,
  hospitalId,
  guardianId,
}: IPatient) => ({
  first_name: firstName,
  last_name: lastName,
  age,
  sex,
  birth_date: birthDate,
  city_name: cityName,
  hospital: hospitalId,
  guardian: guardianId,
});

export {
  dtoToEntityMapper,
  entityToDTOMapper,
  entityToRawDTO,
  entityToRawDTOMapper,
};

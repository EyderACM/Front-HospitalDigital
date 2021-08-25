import fetcher from "services/lib/fetcher";
import useSWR from "swr";
import BaseService from "types/BaseService";
import IPatient from "types/patient/patient";
import IPatientDTO from "types/patient/patientDTO";
import environmentVariables from "utils/constants/environmentVariables";
import createPatient from "./createPatient";
import deletePatient from "./deletePatient";
import getPatient from "./getPatient";
import updatePatient from "./updatePatient";

export const patientsUrl = `${environmentVariables.apiUrl}/patients`;
export const guardiansUrl = `${environmentVariables.apiUrl}/guardians`;
export const hospitalsUrl = `${environmentVariables.apiUrl}/hospitals`;

const usePatientService = (): BaseService<IPatient, IPatientDTO> => {
  const { data: patients } = useSWR<IPatientDTO[]>(patientsUrl, fetcher);

  const getAllPatients = () => Promise.resolve(patients as IPatientDTO[]);

  return {
    getAll: getAllPatients,
    create: createPatient,
    delete: deletePatient,
    get: getPatient,
    update: updatePatient,
  };
};

export default usePatientService;

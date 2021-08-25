import fetchJson from "services/lib/fetchJson";
import IPatient from "types/patient/patient";
import IPatientDTO from "types/patient/patientDTO";
import { entityToDTOMapper } from "types/patient/patientMapper";
import { jsonApplication } from "utils/constants/headers";
import Method from "utils/constants/methods";
import { patientsUrl } from ".";

const createPatient = (patient: IPatient): Promise<IPatientDTO> =>
  fetchJson(patientsUrl, {
    method: Method.POST,
    headers: jsonApplication,
    body: JSON.stringify(entityToDTOMapper(patient)),
  }) as Promise<IPatientDTO>;

export default createPatient;

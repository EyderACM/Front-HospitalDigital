import fetchJson from "services/lib/fetchJson";
import IPatientDTO from "types/patient/patientDTO";
import { jsonApplication } from "utils/constants/headers";
import Method from "utils/constants/methods";
import { patientsUrl } from ".";

const getPatient = (id: number): Promise<IPatientDTO> =>
  fetchJson(`${patientsUrl}/${id}`, {
    method: Method.GET,
    headers: jsonApplication,
  });

export default getPatient;

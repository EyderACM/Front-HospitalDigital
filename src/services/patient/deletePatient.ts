import fetchJson from "services/lib/fetchJson";
import IPatientDTO from "types/patient/patientDTO";
import Method from "utils/constants/methods";
import { patientsUrl } from ".";

const deletePatient = (id: number): Promise<IPatientDTO> =>
  fetchJson(`${patientsUrl}/${id}`, {
    method: Method.DELETE,
  });

export default deletePatient;

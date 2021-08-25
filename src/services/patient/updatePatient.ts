import { parseFullName } from "parse-full-name";
import fetchJson from "services/lib/fetchJson";
import IPatient from "types/patient/patient";
import IPatientDTO from "types/patient/patientDTO";
import { entityToRawDTO } from "types/patient/patientMapper";
import { jsonApplication } from "utils/constants/headers";
import Method from "utils/constants/methods";
import { guardiansUrl, hospitalsUrl, patientsUrl } from ".";

const updatePatient = async (patient: IPatient): Promise<IPatientDTO> => {
  const guardianName = parseFullName(patient.guardianName || "");

  const guardian = await fetchJson(guardiansUrl, {
    method: Method.POST,
    headers: jsonApplication,
    body: JSON.stringify({
      first_name: guardianName.first,
      last_name: guardianName.last,
      phone: patient.guardianPhone,
    }),
  });

  const hospital = await fetchJson(hospitalsUrl, {
    method: Method.POST,
    headers: jsonApplication,
    body: JSON.stringify({ name: patient.hospitalName }),
  });

  patient.hospitalId = hospital.id;
  patient.guardianId = guardian.id;

  return fetchJson(`${patientsUrl}/${patient.id}`, {
    method: Method.PUT,
    headers: jsonApplication,
    body: JSON.stringify(entityToRawDTO(patient)),
  }) as Promise<IPatientDTO>;
};

export default updatePatient;

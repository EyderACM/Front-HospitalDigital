import fetchJson from "services/lib/fetchJson";
import IPatient from "types/patient/patient";
import IPatientDTO from "types/patient/patientDTO";
import { entityToRawDTOMapper } from "types/patient/patientMapper";
import { jsonApplication } from "utils/constants/headers";
import Method from "utils/constants/methods";
import { guardiansUrl, hospitalsUrl, patientsUrl } from ".";
import parseFullName from "parse-full-name";

const createPatient = async (patient: IPatient): Promise<IPatientDTO> => {
  const guardianName = parseFullName.parseFullName(patient.guardianName || "");
  console.log(patient);

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

  return fetchJson(patientsUrl, {
    method: Method.POST,
    headers: jsonApplication,
    body: JSON.stringify(entityToRawDTOMapper(patient)),
  }) as Promise<IPatientDTO>;
};

export default createPatient;

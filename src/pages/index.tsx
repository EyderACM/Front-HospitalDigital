import usePatientService from "services/patient";
import IPatient from "types/patient/patient";
import IPatientDTO from "types/patient/patientDTO";
import { dtoToEntityMapper } from "types/patient/patientMapper";
import AdminPanelViewFactory from "./Home/Home";

export default AdminPanelViewFactory<IPatient, IPatientDTO>(
  usePatientService,
  dtoToEntityMapper
);

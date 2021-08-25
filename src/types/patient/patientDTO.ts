import IGuardianDTO from "types/guardian/guardianDTO";
import IHospitalDTO from "types/hospital/hospitalDTO";

interface IPatientDTO {
  id?: number;
  first_name: string;
  last_name: string;
  age: number;
  sex: string;
  birth_date?: string;
  city_name: string;
  hospital?: IHospitalDTO;
  hospital_name?: string;
  guardian?: IGuardianDTO;
  guardian_first_name?: string;
  guardian_last_name?: string;
  guardian_phone?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export default IPatientDTO;

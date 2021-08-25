interface IPatientDTO {
  id?: number;
  first_name: string;
  last_name: string;
  age: number;
  sex: string;
  birth_date: string;
  city_name: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export default IPatientDTO;

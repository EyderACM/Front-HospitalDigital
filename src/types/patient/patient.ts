interface IPatient {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
  birthDate: string;
  cityName: string;
  isActive?: boolean;
  registeredDate?: string;
}

export default IPatient;

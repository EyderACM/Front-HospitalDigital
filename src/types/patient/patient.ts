interface IPatient {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
  birthDate?: string;
  cityName: string;
  hospitalName?: string;
  guardianName?: string;
  guardianPhone?: string;
  hospitalId?: number;
  guardianId?: number;
  isActive?: boolean;
  registeredDate?: string;
}

const patientGenerator = (): IPatient => ({
  firstName: "",
  lastName: "",
  age: 0,
  sex: "",
  cityName: "",
});

export { patientGenerator };
export default IPatient;

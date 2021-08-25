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

const patientGenerator = (): IPatient => ({
  firstName: "",
  lastName: "",
  age: 0,
  sex: "",
  birthDate: "",
  cityName: "",
});

export { patientGenerator };
export default IPatient;

interface IHospital {
  id: number;
  name: string;
}

const hospitalGenerator = (): IHospital => ({
  id: 0,
  name: "",
});

const hospitalTableGenerator = () => ({
  "Hospital name": "",
});

export { hospitalGenerator, hospitalTableGenerator };
export default IHospital;

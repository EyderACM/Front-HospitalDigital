interface IGuardian {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

const guardianGenerator = (): IGuardian => ({
  id: 0,
  firstName: "",
  lastName: "",
  phone: "",
});

const guardianTableGenerator = () => ({
  "Guardian name": "",
  "Guardian phone": "",
});

export { guardianGenerator, guardianTableGenerator };
export default IGuardian;

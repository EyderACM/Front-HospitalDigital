import jsPDF from "jspdf";
import "jspdf-autotable";

const useTableConvertor = () => {
  const generatePdf = (data: Object[]) => {
    const doc = new jsPDF();
    const columnTitles = Object.keys(data[0]);
    const rows: Object[] = [];
    data.forEach((element) => {
      rows.push(Object.values(element));
    });

    //@ts-ignore
    doc.autoTable(columnTitles, rows, { startY: 10 });
    doc.save("data.pdf");
  };

  return [generatePdf];
};

export default useTableConvertor;

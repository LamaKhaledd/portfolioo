import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadPDF = async (
  elementId: string,
  fileName = "download.pdf"
) => {
  const element = document.getElementById(elementId);
  if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      scrollX: 0,
      scrollY: 0,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;
    while (position < imgHeight) {
      pdf.addImage(imgData, "PNG", 0, -position, imgWidth, imgHeight);
      if (position + pdfHeight < imgHeight) {
        pdf.addPage();
      }
      position += pdfHeight;
    }
    pdf.save(fileName);
};

function generatePDF() {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("💖 Marriage Biodata 💖", 20, 20);

    doc.setFontSize(14);
    doc.text("Name: ________", 20, 40);
    doc.text("Age: ________", 20, 55);
    doc.text("Education: ________", 20, 70);
    doc.text("Occupation: ________", 20, 85);
    doc.text("Location: ________", 20, 100);
    doc.text("Family Details: __________________", 20, 115);

    doc.save("biodata.pdf");
}

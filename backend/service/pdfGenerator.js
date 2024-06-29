// pdfGenerator.js

const { PDFDocument, StandardFonts } = require('pdf-lib');
const fs = require('fs').promises;
async function generateReceiptPDF(bookingDetails) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    page.drawText('Receipt', {
        x: 50,
        y: height - 50,
        size: 24,
        font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    });

    page.drawText(`Booking ID: ${bookingDetails._id}`, {
        x: 50,
        y: height - 100,
        size: 18,
        font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    });

    page.drawText(`Customer Name: ${bookingDetails.name}`, {
        x: 50,
        y: height - 150,
        size: 18,
        font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    });

    // Add more details as needed, e.g., amount, dates, customer info, etc.

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}
async function savePDF(pdfBytes, filePath = 'receipt.pdf') {
    try {
        await fs.writeFile(filePath, pdfBytes);
        console.log(`PDF generated and saved successfully at ${filePath}`);
        return filePath; // Return the file path if needed
    } catch (error) {
        console.error('Error saving PDF:', error);
        throw error;
    }
}

module.exports = {generateReceiptPDF , savePDF};

import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DownloadPdf = () => {
    const handleDownload = () => {
        const input = document.getElementById('component-to-download');
        html2canvas(input, { scale: .7, top: 500 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('blogs.pdf');
        });
    };
    return (
        <button className='btn_regular' onClick={handleDownload}>Download Blogs PDF</button>
    );
};

export default DownloadPdf;
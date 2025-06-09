// wrapped in DOMContentLoaded so I can safely load this script in the <head>
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('download-pdf')
    .addEventListener('click', () => {
      const element = document.querySelector('.main-content');
      html2pdf()
        .set({
          filename: 'Colloquium.{{ page.title }}.pdf',
          margin: 0.5,
          filename: 'colloquium.pdf',
          jsPDF: { unit: 'in', format: 'letter' },
          html2canvas: {
            scale: 2,
            onclone: (clonedDoc) => {
              // inject your print.css into the cloned document
              const link = clonedDoc.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/print.css';
              link.media = 'all';
              clonedDoc.head.appendChild(link);
            }
          }
        })
        .from(element)
        .save();
    });
});

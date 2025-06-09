// wrapped in DOMContentLoaded so I can safely load this script in the <head>
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('download-pdf')
    .addEventListener('click', () => {
      const element = document.querySelector('.main-content');
      const opts = { /* your html2pdf options */ };
      html2pdf().set(opts).from(element).save();
    });
});

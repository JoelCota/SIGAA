$(document).ready(function () {
      $('#tablaPracticas').DataTable({
        language: {
          url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json'
        }
      });
    });

    const ctx = document.getElementById('graficaDistribucion').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Introducción', 'Aproximación', 'Simulación'],
        datasets: [{
          data: [35, 35, 30],
          backgroundColor: ['#006db6', '#0066cc', '#cbd5e1'],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.parsed}%`
            }
          }
        }
      }
    });
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

document.querySelector('.btn.btn-primary').addEventListener('click', function () {
  $('#modalRegistroPractica').modal('show');
});

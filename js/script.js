
document.addEventListener('DOMContentLoaded', function() {
    const camposMarcaAgua = document.querySelectorAll('.campo-form');

    camposMarcaAgua.forEach(function(input) {
        input.value = input.getAttribute('data-placeholder');

        input.addEventListener('focus', function() {
            if (input.value === input.getAttribute('data-placeholder')) {
                input.value = '';
            }
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                input.value = input.getAttribute('data-placeholder');
            }
        });
    });

    const soloIdaRadio = document.getElementById('solo_ida');
    const idaVueltaRadio = document.getElementById('ida_vuelta');
    const fechaVueltaInput = document.getElementById('fecha_vuelta');

    // Configurar estado inicial del formulario
    soloIdaRadio.checked = true; // Marcar 'Solo Ida' por defecto
    fechaVueltaInput.style.display = 'none'; // Ocultar campo de fecha de vuelta por defecto

    soloIdaRadio.addEventListener('change', function() {
        fechaVueltaInput.style.display = 'none';
    });

    idaVueltaRadio.addEventListener('change', function() {
        fechaVueltaInput.style.display = 'block';
    });

    const enviarLinkButton = document.querySelector('.enviar-link');
    enviarLinkButton.addEventListener('click', function(event) {
        event.preventDefault();
        enviarWhatsApp(event);
    });
});

function enviarWhatsApp(event) {
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let fechaIda = document.getElementById("fecha_ida").value;
    let tipoVuelo = document.querySelector('input[name="tipo_vuelo"]:checked').value;
    let saludo = "Hola, me interesa este vuelo";
    let mensaje = 
      saludo +
      "\nOrigen: " + origen + 
      "\nDestino: " + destino +
      "\nFecha Ida: " + fechaIda;

    const soloIdaRadio = document.getElementById('solo_ida');
    const fechaVuelta = document.getElementById("fecha_vuelta");
    if (!soloIdaRadio.checked) {
        mensaje += "\nFecha Vuelta: " + fechaVuelta.value;
    }

    let url = "https://wa.me/+51991093018?text=" + encodeURIComponent(mensaje);
    window.open(url);
}

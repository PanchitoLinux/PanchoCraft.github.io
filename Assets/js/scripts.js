//
//  COPIAR IP
//
var ip = document.querySelector('#ip');
var ipSpan = ip.querySelector('span');
var ipTextarea = ip.querySelector('textarea');
ip.addEventListener('click', function () {
  ip.classList.add('is-active');
  setTimeout(() => {
    ip.classList.remove('is-active');
  }, 1500);

  ipTextarea.classList.add('is-active');
  ipTextarea.value = ipSpan.innerHTML;
  ipTextarea.select();
  ipTextarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  ipTextarea.classList.remove('is-active');
});

//
//  ESTADO DEL SERVIDOR
//
/* Debido a que usas Radmin VPN, los servicios de internet públicos no pueden
   escanear si tu servidor está encendido o apagado. Por lo tanto, pondremos
   un estado fijo indicándole a la gente que deben conectarse a tu red. */
$('#status').html('<i class="fas fa-network-wired"></i> Servidor Radmin VPN');
$('#motd').html('Red: <b>PanchoCraft 1.0</b> <br> Contraseña: <b>123456</b>');

//
//  MENÚ MÓVIL
//
$('.navbar-burger').on('click', function () {
  document.querySelector('.navbar-menu').classList.toggle('is-active');
});
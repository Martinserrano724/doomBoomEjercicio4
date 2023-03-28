setInterval(()=>{

    const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ];
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Novienbre',
        'Dicienbre',
          ];
let reloj = document.getElementsByClassName("reloj")[0];
let fech = document.getElementsByClassName("fecha")[0]
let tiempoActual=new Date
let minutos=tiempoActual.getMinutes();
let horas=tiempoActual.getHours();
let segundos=tiempoActual.getSeconds();
let dia=tiempoActual.getDate();
let mes=tiempoActual.getMonth();
let anio=tiempoActual.getFullYear();
let turno=horas>=12?'PM':'AM';
reloj.innerHTML=`${horas}:${minutos}:<ul>
<li>${turno}</li>
<li class='segundo'>${segundos}</li>
</ul>`;


fech.innerHTML=`${dias[tiempoActual.getDay()]} ${dia} de ${meses[mes]} del ${anio}`
},1000);
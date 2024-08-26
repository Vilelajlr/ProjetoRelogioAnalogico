const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogioDigital = document.getElementById('relogioDigital');
const relogioAnalogico = document.getElementById('relogioAnalogico');

const relogio = setInterval(function time(){

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    horas.innerHTML = hr < 10 ? '0' + hr : hr;
    minutos.innerHTML = min < 10 ? '0' + min : min;
    segundos.innerHTML = seg < 10 ? '0' + seg : seg;

});

const buttonMudaRelogio = document.getElementById('mudaRelogio');

buttonMudaRelogio.addEventListener('click', function(){
    

    if(relogioDigital.style.display === 'none'){
        relogioDigital.style.display = 'flex';
        relogioAnalogico.style.display = 'none';
        buttonMudaRelogio.innerHTML = 'Relógio Analógico';
        return;
    } else {
        relogioDigital.style.display = 'none';
        relogioAnalogico.style.display = 'block';
        buttonMudaRelogio.innerHTML = 'Relógio Digital';
    }


    function setClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
    
        const secondHand = document.getElementById('second');
        const minuteHand = document.getElementById('minute');
        const hourHand = document.getElementById('hour');
    
        const secondDegree = ((seconds / 60) * 360) + 90;
        const minuteDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        const hourDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    
        secondHand.style.transform = `rotate(${secondDegree}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
        hourHand.style.transform = `rotate(${hourDegree}deg)`;
    }
    
    setInterval(setClock, 1000);
    setClock();
    
    
});